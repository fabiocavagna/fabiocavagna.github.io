import fs from 'node:fs';
import path from 'node:path';
import PDFDocument from 'pdfkit';
import QRCode from 'qrcode';

const outputDir = path.resolve('print', 'business-card');
fs.mkdirSync(outputDir, { recursive: true });

const mm = (value) => (value * 72) / 25.4;

const trim = {
  width: mm(85),
  height: mm(55),
};

const bleed = mm(3);
const page = {
  width: trim.width + bleed * 2,
  height: trim.height + bleed * 2,
};

const themes = {
  dark: {
    ink: '#e6e8ee',
    muted: '#aeb6c6',
    blue: '#5b9dff',
    base: '#0f1115',
    panel: '#171b25',
    edge: '#10192a',
    line: '#2a3140',
    crop: '#8a92a3',
    qrDark: '#0f1115',
    qrLight: '#ffffff',
    qrPlate: '#ffffff',
  },
  light: {
    ink: '#1a1d24',
    muted: '#5a6270',
    blue: '#2563eb',
    base: '#ffffff',
    panel: '#f4f6fa',
    edge: '#eef1f6',
    line: '#dbe0e8',
    crop: '#9aa2b1',
    qrDark: '#101828',
    qrLight: '#ffffff',
    qrPlate: '#f4f6fa',
  },
};

const contact = {
  name: 'Fabio Cavagna',
  role: 'PhD Candidate in Aerospace Engineering',
  affiliation: 'Politecnico di Milano · Siemens DI Software',
  focus: 'Structural Dynamics · Modal Analysis · Spacecraft Structures',
  email: 'fabiocavagna0@gmail.com',
  linkedin: 'linkedin.com/in/fabio-cavagna',
  website: 'fabiocavagna.com',
  url: 'https://fabiocavagna.com',
};

const makeDoc = (filePath) => {
  const doc = new PDFDocument({
    size: [page.width, page.height],
    margin: 0,
    info: {
      Title: 'Fabio Cavagna Business Card',
      Author: 'Fabio Cavagna',
      Subject: 'Print-ready business card with 3 mm bleed',
    },
  });
  doc.pipe(fs.createWriteStream(filePath));
  return doc;
};

const background = (doc, c) => {
  doc.rect(0, 0, page.width, page.height).fill(c.base);
  const gradient = doc
    .linearGradient(0, 0, page.width, page.height)
    .stop(0, c.base)
    .stop(0.58, c.panel)
    .stop(1, c.edge);
  doc
    .save()
    .opacity(0.9)
    .rect(0, 0, page.width, page.height)
    .fill(gradient)
    .restore();
};

const cropMarks = (doc, c) => {
  const mark = mm(2.3);
  const left = bleed;
  const top = bleed;
  const right = bleed + trim.width;
  const bottom = bleed + trim.height;

  doc.save().strokeColor(c.crop).lineWidth(0.25).opacity(0.75);
  [
    [[left - mark, top], [left - mm(0.6), top]],
    [[left, top - mark], [left, top - mm(0.6)]],
    [[right + mm(0.6), top], [right + mark, top]],
    [[right, top - mark], [right, top - mm(0.6)]],
    [[left - mark, bottom], [left - mm(0.6), bottom]],
    [[left, bottom + mm(0.6)], [left, bottom + mark]],
    [[right + mm(0.6), bottom], [right + mark, bottom]],
    [[right, bottom + mm(0.6)], [right, bottom + mark]],
  ].forEach(([[x1, y1], [x2, y2]]) => doc.moveTo(x1, y1).lineTo(x2, y2).stroke());
  doc.restore();
};

const front = (doc, c) => {
  background(doc, c);
  const x = bleed + mm(6);
  const y = bleed + mm(7);
  const width = trim.width - mm(12);

  doc
    .save()
    .roundedRect(bleed + mm(4), bleed + mm(4), trim.width - mm(8), trim.height - mm(8), mm(1.5))
    .lineWidth(0.6)
    .strokeColor(c.line)
    .stroke()
    .restore();

  doc
    .save()
    .rect(bleed + mm(4), bleed + mm(4), mm(1.2), trim.height - mm(8))
    .fill(c.blue)
    .restore();

  doc.font('Helvetica-Bold').fontSize(21).fillColor(c.ink).text(contact.name, x, y, {
    width,
    lineGap: 0,
  });

  doc.font('Helvetica').fontSize(8.7).fillColor(c.blue).text(contact.role, x, y + mm(10.8), {
    width,
  });

  doc.fontSize(7.4).fillColor(c.muted).text(contact.affiliation, x, y + mm(16.1), {
    width,
  });

  doc
    .moveTo(x, bleed + mm(34.8))
    .lineTo(x + width, bleed + mm(34.8))
    .strokeColor(c.line)
    .lineWidth(0.5)
    .stroke();

  doc.font('Helvetica-Bold').fontSize(7.7).fillColor(c.ink).text(contact.focus, x, bleed + mm(39.1), {
    width,
    characterSpacing: 0.08,
  });

  cropMarks(doc, c);
};

const contactLine = (doc, c, label, value, x, y, width) => {
  doc.font('Helvetica-Bold').fontSize(5.6).fillColor(c.blue).text(label.toUpperCase(), x, y, {
    width,
    characterSpacing: 0.35,
  });
  doc.font('Helvetica').fontSize(7.7).fillColor(c.ink).text(value, x, y + mm(3.4), {
    width,
  });
};

const back = async (doc, c) => {
  background(doc, c);
  const qrBuffer = await QRCode.toBuffer(contact.url, {
    type: 'png',
    errorCorrectionLevel: 'H',
    margin: 1,
    width: 760,
    color: {
      dark: c.qrDark,
      light: c.qrLight,
    },
  });

  const qrSize = mm(24);
  const qrX = bleed + trim.width - mm(7) - qrSize;
  const qrY = bleed + mm(9);
  const x = bleed + mm(7);
  const width = qrX - x - mm(7);

  doc
    .save()
    .roundedRect(qrX - mm(1.8), qrY - mm(1.8), qrSize + mm(3.6), qrSize + mm(3.6), mm(1.4))
    .fill(c.qrPlate)
    .restore();
  doc.image(qrBuffer, qrX, qrY, { width: qrSize, height: qrSize });

  doc.font('Helvetica-Bold').fontSize(11.5).fillColor(c.ink).text('Let\'s stay in touch', x, bleed + mm(8), {
    width,
  });
  doc.font('Helvetica').fontSize(6.9).fillColor(c.muted).text('Portfolio, CV and publications', x, bleed + mm(15), {
    width,
  });

  contactLine(doc, c, 'Email', contact.email, x, bleed + mm(25.2), width);
  contactLine(doc, c, 'LinkedIn', contact.linkedin, x, bleed + mm(34.9), width);
  contactLine(doc, c, 'Web', contact.website, x, bleed + mm(44.6), width);

  cropMarks(doc, c);
};

const writeSingle = async (name, draw) => {
  const doc = makeDoc(path.join(outputDir, name));
  await draw(doc);
  doc.end();
};

const writeDuplex = async (name, c) => {
  const doc = makeDoc(path.join(outputDir, name));
  front(doc, c);
  doc.addPage({ size: [page.width, page.height], margin: 0 });
  await back(doc, c);
  doc.end();
};

const buildTheme = async (themeName) => {
  const c = themes[themeName];
  const suffix = themeName === 'dark' ? '' : `-${themeName}`;
  await writeSingle(`fabio-cavagna-business-card-front${suffix}.pdf`, (doc) => front(doc, c));
  await writeSingle(`fabio-cavagna-business-card-back${suffix}.pdf`, (doc) => back(doc, c));
  await writeDuplex(`fabio-cavagna-business-card-duplex${suffix}.pdf`, c);
};

await buildTheme('dark');
await buildTheme('light');

console.log(`Business card PDFs written to ${outputDir}`);