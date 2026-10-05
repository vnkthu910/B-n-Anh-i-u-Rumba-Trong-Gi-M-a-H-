const fs=require('fs'),path=require('path');
const {Document,Packer,Paragraph,TextRun,HeadingLevel,AlignmentType,PageBreak,Footer,PageNumber,TableOfContents}=require('docx');
const [,,dirArg,bookTitle,rangeText,outFile]=process.argv;
const dir=path.resolve(dirArg);
const files=fs.readdirSync(dir).filter(f=>/^chuong-\d+\.md$/.test(f)).sort((a,b)=>parseInt(a.match(/\d+/)[0])-parseInt(b.match(/\d+/)[0]));
function runs(text,base={}){
  const out=[];const re=/(\*\*[^*]+\*\*|\*[^*]+\*)/g;let last=0,m;
  while((m=re.exec(text))){ if(m.index>last) out.push(new TextRun({text:text.slice(last,m.index),...base}));
    const t=m[0]; if(t.startsWith('**')) out.push(new TextRun({text:t.slice(2,-2),bold:true,...base}));
    else out.push(new TextRun({text:t.slice(1,-1),italics:true,...base})); last=m.index+t.length;}
  if(last<text.length) out.push(new TextRun({text:text.slice(last),...base}));
  return out;
}
const children=[];
children.push(new Paragraph({spacing:{before:3000},alignment:AlignmentType.CENTER,children:[new TextRun({text:'BÊN ANH ĐIỆU RUMBA TRONG GIÓ MÙA HẠ',bold:true,size:40})]}));
children.push(new Paragraph({spacing:{before:400},alignment:AlignmentType.CENTER,children:[new TextRun({text:bookTitle,size:30,italics:true})]}));
children.push(new Paragraph({spacing:{before:200},alignment:AlignmentType.CENTER,children:[new TextRun({text:rangeText,size:24})]}));
children.push(new Paragraph({children:[new PageBreak()]}));
children.push(new Paragraph({alignment:AlignmentType.CENTER,spacing:{after:300},children:[new TextRun({text:'Mục lục',bold:true,size:32})]}));
for(const f of files){const h=fs.readFileSync(path.join(dir,f),'utf8').split(/\r?\n/).find(x=>x.startsWith('# '));children.push(new Paragraph({spacing:{after:80},children:[new TextRun({text:h.slice(2),size:24})]}));}
for(const f of files){
  const lines=fs.readFileSync(path.join(dir,f),'utf8').split(/\r?\n/);
  children.push(new Paragraph({children:[new PageBreak()]}));
  let first=true;
  for(let l of lines){
    l=l.trimEnd();
    if(!l.trim()) continue;
    if(l.startsWith('# ')){children.push(new Paragraph({heading:HeadingLevel.HEADING_1,alignment:AlignmentType.CENTER,spacing:{after:480},children:[new TextRun(l.slice(2))]}));continue;}
    if(l.trim()==='---'){children.push(new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:240,after:240},children:[new TextRun('*  *  *')]}));continue;}
    if(l.startsWith('>')){const t=l.replace(/^>\s?/,''); if(!t) continue;
      children.push(new Paragraph({indent:{left:720,right:720},spacing:{after:120,line:340},children:runs(t,{italics:true})}));continue;}
    children.push(new Paragraph({alignment:AlignmentType.JUSTIFIED,indent:{firstLine:425},spacing:{after:120,line:340},children:runs(l)}));
  }
}
const doc=new Document({
  creator:'vnkthu910',title:'Bên Anh Điệu Rumba Trong Gió Mùa Hạ – '+bookTitle,
  styles:{default:{document:{run:{font:'Times New Roman',size:26}}},
    paragraphStyles:[{id:'Heading1',name:'Heading 1',basedOn:'Normal',next:'Normal',quickFormat:true,run:{size:34,bold:true,font:'Times New Roman'},paragraph:{spacing:{before:600,after:480},outlineLevel:0}}]},
  sections:[{properties:{page:{size:{width:11906,height:16838},margin:{top:1440,bottom:1440,left:1440,right:1440}}},
    footers:{default:new Footer({children:[new Paragraph({alignment:AlignmentType.CENTER,children:[new TextRun({children:[PageNumber.CURRENT],size:20})]})]})},
    children}]});
Packer.toBuffer(doc).then(b=>{fs.writeFileSync(path.resolve(outFile),b);console.log('ok',files.length)});
