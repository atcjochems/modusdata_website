from pathlib import Path
import zipfile
import xml.etree.ElementTree as ET

files = [Path('data/CV Arthur Jochems AI eng.docx'), Path('data/Motivation und Businessplan.docx')]
out = []
for path in files:
    out.append('--- ' + path.name)
    with zipfile.ZipFile(path) as z:
        xml = z.read('word/document.xml')
    root = ET.fromstring(xml)
    ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
    paragraphs = []
    for p in root.findall('.//w:p', ns):
        texts = [t.text for t in p.findall('.//w:t', ns) if t.text]
        if texts:
            paragraphs.append(''.join(texts))
    out.extend(paragraphs[:160])
with open('extracted_docx.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(out))
print('Extracted', len(out), 'lines to extracted_docx.txt')
