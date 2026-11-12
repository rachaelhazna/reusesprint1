(()=>{
const IC={
cycle:'<path d="M21 12a9 9 0 0 0-15-6.7L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 15 6.7l3-2.7"/><path d="M16 16h5v5"/>',
book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>',
table:'<path d="M3 7h18"/><path d="M5 7v13M19 7v13"/><path d="M5 12h14"/>',
shirt:'<path d="M20.4 6.6 16 4a4 4 0 0 1-8 0L3.6 6.6a1 1 0 0 0-.5 1.2l1 3a1 1 0 0 0 1.3.6L7 11v9a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-9l1.6.4a1 1 0 0 0 1.3-.6l1-3a1 1 0 0 0-.5-1.2z"/>',
laptop:'<rect x="4" y="4" width="16" height="11" rx="2"/><path d="M2 20h20"/>',
mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
left:'<path d="m15 18-6-6 6-6"/>',right:'<path d="m9 18 6-6-6-6"/>',
pin:'<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
flag:'<path d="M4 22V4a1 1 0 0 1 1-1h12l-2 4 2 4H5"/>',
search:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
x:'<path d="M18 6 6 18M6 6l12 12"/>',plus:'<path d="M12 5v14M5 12h14"/>',
home:'<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>',
chat:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
tag:'<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
swap:'<path d="M16 3h5v5"/><path d="M21 3 14 10"/><path d="M8 21H3v-5"/><path d="m3 21 7-7"/>',
gift:'<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M19 12v9H5v-9"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5"/>',
camera:'<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z"/><circle cx="12" cy="13" r="3"/>',
check:'<path d="M20 6 9 17l-5-5"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',
heart:'<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z"/>',
box:'<path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
out:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>'
};
const svg=(n,c='i')=>`<svg class="${c}" viewBox="0 0 24 24">${IC[n]||''}</svg>`;
const VB='<svg viewBox="0 0 24 24"><path d="M12 2l2.4 1.8 3-.2.9 2.9 2.5 1.7-1 2.8 1 2.8-2.5 1.7-.9 2.9-3-.2L12 22l-2.4-1.8-3 .2-.9-2.9-2.5-1.7 1-2.8-1-2.8 2.5-1.7.9-2.9 3 .2z"/><path d="m8.5 12 2.5 2.5 4.5-5" fill="none"/></svg>';
const hydrate=root=>root.querySelectorAll('[data-ic]').forEach(e=>{if(!e.dataset.done){e.insertAdjacentHTML('afterbegin',svg(e.dataset.ic));e.dataset.done=1}});
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const rp=n=>'Rp'+Number(n).toLocaleString('id-ID');

const CAMPUS=[
 {id:'unpad',n:'Universitas Padjadjaran',s:'Unpad',loc:'Jatinangor',dom:'unpad.ac.id',cod:['Gerbang Lama','Masjid Raya Unpad','Bale Santika','Halte Bus Kampus']},
 {id:'itb',n:'Institut Teknologi Bandung',s:'ITB',loc:'Ganesha, Bandung',dom:'itb.ac.id',cod:['Gerbang Depan ITB','Masjid Salman','Perpustakaan Pusat','Sunken Court']},
 {id:'ui',n:'Universitas Indonesia',s:'UI',loc:'Depok',dom:'ui.ac.id',cod:['Stasiun UI','Masjid UI','Perpustakaan UI','Halte Bikun FIB']},
 {id:'ugm',n:'Universitas Gadjah Mada',s:'UGM',loc:'Yogyakarta',dom:'ugm.ac.id',cod:['Bundaran UGM','Masjid Kampus UGM','Perpustakaan Pusat','Lembah UGM']},
 {id:'ipb',n:'IPB University',s:'IPB',loc:'Dramaga, Bogor',dom:'ipb.ac.id',cod:['Gerbang Dramaga','Masjid Al-Hurriyyah','Perpustakaan LSI','Gymnasium']},
 {id:'tel',n:'Telkom University',s:'Tel-U',loc:'Bandung',dom:'telkomuniversity.ac.id',cod:['Gerbang Utama','Masjid Syamsul Ulum','Open Library','Danau Tel-U']}
];
const PINPOS=[[22,30],[70,26],[34,74],[78,70]];
const CATIC={'Buku & Modul':'book','Elektronik':'laptop','Pakaian':'shirt','Perabot Kos':'table','Alat Tulis':'tag','Lainnya':'box'};
const ph=(ic,bg,fg)=>'data:image/svg+xml;utf8,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${bg}"/><stop offset="1" stop-color="${fg}" stop-opacity=".35"/></linearGradient></defs><rect width="400" height="400" fill="url(#g)"/><g transform="translate(120 120) scale(6.6)" fill="none" stroke="${fg}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${IC[ic]}</g></svg>`);
const SEED=[
 {t:'Buku Pengantar Ekonomi Mankiw',k:'Buku & Modul',c:'Baik',m:'Sell',p:45000,cod:0,by:'Rani A.',fac:'FEB',d:'Edisi 7 bahasa Indonesia. Ada stabilo di bab 1–3, sisanya bersih.',img:[ph('book','#E6F0E0','#2D4B33'),ph('book','#F2EAD8','#7A5A12')]},
 {t:'Meja Lipat Laptop',k:'Perabot Kos',c:'Seperti baru',m:'Swap',w:'Rak buku kecil / kipas angin',cod:1,by:'Dimas P.',fac:'FTIP',d:'Dipakai 1 semester, kaki masih kokoh.',img:[ph('table','#E3EDF5','#2F6690')]},
 {t:'Kemeja PMB Putih (M)',k:'Pakaian',c:'Baik',m:'Donate',cod:2,by:'Salsa N.',fac:'FISIP',d:'Buat maba yang butuh kemeja putih untuk PMB. Sudah dicuci & disetrika.',img:[ph('shirt','#FBEFE6','#B4541A')]},
 {t:'Charger Laptop 65W USB-C',k:'Elektronik',c:'Layak pakai',m:'Sell',p:120000,cod:3,by:'Fajar H.',fac:'FMIPA',d:'Original, kabel ada sedikit lecet tapi normal.',img:[ph('laptop','#E6F0E0','#2D4B33')]},
 {t:'Kalkulator Casio fx-991ID',k:'Alat Tulis',c:'Baik',m:'Swap',w:'Buku Statistika Dasar',cod:0,by:'Nadia K.',fac:'FTG',d:'Semua tombol berfungsi, baterai baru diganti.',img:[ph('tag','#E3EDF5','#2F6690')]}
];

let S={onb:0,email:'',user:null,items:[],filter:'Semua'};
const KEY='reuse-s1';
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify({user:S.user,items:S.items.filter(i=>i.mine)}))}catch(e){}};
try{const d=JSON.parse(localStorage.getItem(KEY)||'null');if(d){S.user=d.user;S.items=d.items||[]}}catch(e){}

const seedFor=cid=>SEED.map((x,i)=>({...x,id:'s'+i,campus:cid,ts:Date.now()-(i+1)*3600e3*(i+2),verified:true}));
const campus=()=>CAMPUS.find(c=>c.id===S.user?.campus)||CAMPUS[0];
const all=()=>[...S.items.filter(i=>i.campus===S.user.campus),...seedFor(S.user.campus)].sort((a,b)=>b.ts-a.ts);

let cur='onb';
function go(id,opts={}){
  document.querySelectorAll('.screen').forEach(s=>s.classList.toggle('on',s.id===id));
  cur=id;window.scrollTo(0,0);if(id!=='otp')$('#inbox').classList.remove('on');
  $('#nav').hidden=!['home','profile'].includes(id);
  document.querySelectorAll('#nav [data-tab]').forEach(b=>b.classList.toggle('on',b.dataset.tab===id));
  ({onb:renderOnb,otp:startOtp,campus:renderCampus,home:renderHome,post:resetPost,profile:renderProfile,detail:()=>renderDetail(opts.id)}[id]||(()=>{}))();
}
document.addEventListener('click',e=>{
  const g=e.target.closest('[data-go]');if(g){e.preventDefault();go(g.dataset.go)}
  const t=e.target.closest('[data-tab]');if(t)go(t.dataset.tab);
  const l=e.target.closest('[data-lock]');if(l){e.preventDefault();locked(l.dataset.lock)}
});

let tt;function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('on'),2200)}
function modal(html){$('#modal').innerHTML=html;hydrate($('#modal'));$('#scrim').classList.add('on')}
const closeModal=()=>$('#scrim').classList.remove('on');
$('#scrim').addEventListener('click',e=>{if(e.target.id==='scrim'||e.target.closest('[data-close]'))closeModal()});

function locked(){}
function scope(){
  const ck=(ok,b,s)=>`<div><span class="ck ${ok?'':'no'}">${svg(ok?'check':'lock')}</span><span><b>${b}</b><br><small>${s}</small></span></div>`;
  modal(`<div class="mi" data-ic="flag"></div><h2>Sprint 1 · 6–13 Nov 2026</h2>
  <p>Sprint goal: mahasiswa terverifikasi bisa memposting barang dan melihat detailnya.</p>
  <div class="scope">
  ${ck(1,'PBI-01 · Registrasi, OTP email kampus, pilih kampus','5 SP · Wella')}
  ${ck(1,'PBI-02 · Post item dengan foto & titik COD','8 SP · Fikriyyah')}
  ${ck(1,'PBI-03 · Mode Sell / Swap / Donate','3 SP · Casiella')}
  ${ck(1,'PBI-04 · Detail barang + lencana verifikasi','3 SP · Fikriyyah')}
  ${ck(0,'Chat, pencarian, favorit, edit profil','Sprint berikutnya')}
  </div><button class="btn" data-close>Tutup</button>`);
}
$('#scopeBtn').onclick=scope;$('#scopeBtn2').onclick=scope;

/* onboarding */
const ONB=[['Barang lama, nilai baru','Barang yang sudah tidak kamu pakai bisa langsung dipakai mahasiswa lain di sekitar kampusmu.'],
['Sell, swap, atau donate','Jual untuk uang tambahan, tukar dengan barang yang kamu butuh, atau berbagi gratis.'],
['Aman dan sesama mahasiswa','Daftar pakai email kampus dan OTP. Ketemu di titik COD area kampus.']];
function renderOnb(){const [t,p]=ONB[S.onb];$('#onbT').textContent=t;$('#onbP').textContent=p;
  [...$('#onbD').children].forEach((d,i)=>d.classList.toggle('on',i===S.onb));
  const last=S.onb===2;$('#onbN').innerHTML=(last?'Mulai':'Lanjut')+svg('right');}
$('#onbN').onclick=()=>{if(S.onb<2){S.onb++;renderOnb()}else go('email')};

/* email */
const EMRE=/^[^\s@]+@([a-z0-9-]+\.)*[a-z0-9-]+\.ac\.id$/i;
$('#emailF').onsubmit=e=>{e.preventDefault();const v=$('#emailI').value.trim().toLowerCase();
  if(!v){$('#emailE').textContent='Email wajib diisi.';return}
  if(!EMRE.test(v)){$('#emailE').textContent='Gunakan email kampus yang berakhiran .ac.id.';return}
  $('#emailE').textContent='';S.email=v;go('otp');};
$('#emailI').oninput=()=>$('#emailE').textContent='';

/* otp */
let code='',rt,cd=0,tries=0;
const box=$('#otpBox');box.innerHTML=Array.from({length:6},(_,i)=>`<input inputmode="numeric" maxlength="1" aria-label="Digit ${i+1}">`).join('');
const ins=[...box.children];
function otpVal(){return ins.map(i=>i.value).join('')}
ins.forEach((inp,i)=>{
  inp.addEventListener('input',()=>{const d=inp.value.replace(/\D/g,'');
    if(d.length>1){d.slice(0,6).split('').forEach((c,j)=>{if(ins[j])ins[j].value=c});ins[Math.min(d.length,6)-1].focus()}
    else{inp.value=d;if(d&&ins[i+1])ins[i+1].focus()}
    $('#otpE').textContent='';$('#otpB').disabled=otpVal().length!==6;});
  inp.addEventListener('keydown',e=>{if(e.key==='Backspace'&&!inp.value&&ins[i-1])ins[i-1].focus()});
});
function sendCode(){code=String(Math.floor(100000+Math.random()*900000));tries=0;
  $('#inboxC').textContent=code;$('#inbox').classList.add('on');setTimeout(()=>$('#inbox').classList.remove('on'),6000);
  cd=30;tick();clearInterval(rt);rt=setInterval(tick,1000);}
function tick(){const b=$('#resend');if(cd>0){b.disabled=true;b.textContent=`Kirim ulang (${cd--}s)`}else{b.disabled=false;b.textContent='Kirim ulang';clearInterval(rt)}}
function startOtp(){$('#otpTo').textContent=S.email;ins.forEach(i=>i.value='');$('#otpB').disabled=true;$('#otpE').textContent='';sendCode();setTimeout(()=>ins[0].focus(),50)}
$('#resend').onclick=()=>{ins.forEach(i=>i.value='');$('#otpB').disabled=true;sendCode();toast('Kode baru dikirim ke '+S.email)};
$('#inbox').onclick=()=>{code.split('').forEach((c,j)=>ins[j].value=c);$('#otpB').disabled=false;$('#inbox').classList.remove('on')};
$('#otpF').onsubmit=e=>{e.preventDefault();
  if(otpVal()!==code){tries++;$('#otpE').textContent=tries>=3?'Terlalu banyak percobaan. Minta kode baru.':'Kode salah, coba lagi.';
    if(tries>=3){cd=0;tick()}ins.forEach(i=>i.value='');ins[0].focus();$('#otpB').disabled=true;return}
  clearInterval(rt);
  const local=S.email.split('@')[0].split(/[._\d]/).filter(Boolean)[0]||'mahasiswa';
  S.user={email:S.email,name:local[0].toUpperCase()+local.slice(1),campus:null,verifiedAt:Date.now()};
  go('campus');};

/* campus */
function renderCampus(){const dom=S.email.split('@')[1]||'';
  const sug=CAMPUS.find(c=>dom.endsWith(c.dom));
  $('#campL').innerHTML=CAMPUS.map(c=>`<label><input type="radio" name="camp" value="${c.id}" ${(S.user.campus||sug?.id)===c.id?'checked':''}><span class="ini">${c.s}</span><span><b>${c.n}</b><span>${c.loc}</span></span>${sug?.id===c.id?'<em class="sug" style="font-style:normal">Sesuai email</em>':''}</label>`).join('');
  $('#campE').textContent='';}
$('#campL').addEventListener('change',()=>$('#campE').textContent='');
$('#campB').onclick=()=>{const v=document.querySelector('input[name=camp]:checked');
  if(!v){$('#campE').textContent='Pilih satu kampus dulu.';return}
  S.user.campus=v.value;save();toast('Akun terverifikasi · '+campus().s);go('home');};

/* home */
const MODES=['Semua','Sell','Swap','Donate'];
function priceTxt(i){return i.m==='Sell'?rp(i.p):i.m==='Swap'?'Tukar':'Gratis'}
function ago(ts){const m=Math.max(1,Math.round((Date.now()-ts)/6e4));return m<60?m+' mnt':m<1440?Math.round(m/60)+' jam':Math.round(m/1440)+' hari'}
function renderHome(){const c=campus();$('#hCamp').textContent=c.s+' · '+c.loc;$('#hHi').textContent='Halo, '+S.user.name+'!';
  $('#chips').innerHTML=MODES.map(m=>`<button class="chip ${S.filter===m?'on':''}" data-f="${m}">${m}</button>`).join('');
  const list=all().filter(i=>S.filter==='Semua'||i.m===S.filter);
  $('#grid').innerHTML=list.length?list.map(i=>`<button class="card" data-id="${i.id}"><div class="thumb"><img src="${i.img[0]}" alt=""><span class="mtag m-${i.m}">${i.m}</span></div>
   <div class="ci"><b>${esc(i.t)}</b><div class="pr">${priceTxt(i)}</div><div class="meta">${svg('pin')}${esc(c.cod[i.cod])}</div>
   <div class="meta"><span class="vb">${VB}</span>${esc(i.by)} · ${ago(i.ts)}</div></div></button>`).join('')
   :`<div class="empty">Belum ada barang ${esc(S.filter)} di kampusmu.</div>`;}
$('#chips').addEventListener('click',e=>{const b=e.target.closest('[data-f]');if(b){S.filter=b.dataset.f;renderHome()}});
$('#grid').addEventListener('click',e=>{const b=e.target.closest('[data-id]');if(b)go('detail',{id:b.dataset.id})});

/* post */
let P;
function resetPost(){P={photos:[],mode:null,cod:null};['pT','pK','pC','pP','pW','pD'].forEach(id=>$('#'+id).value='');
  document.querySelectorAll('#postF .err').forEach(e=>e.textContent='');renderPhotos();renderMode();renderCod();}
function renderPhotos(){$('#phC').textContent=`(${P.photos.length}/5 · minimal 1)`;
  $('#phL').innerHTML=P.photos.map((s,i)=>`<div class="ph"><img src="${s}" alt=""><button type="button" class="x" data-rm="${i}">${svg('x')}</button>${i===0?'<span class="cv">Sampul</span>':''}</div>`).join('')
   +(P.photos.length<5?`<button type="button" class="addph" id="addPh">${svg('camera')}Tambah</button>`:'');}
$('#phL').addEventListener('click',e=>{const r=e.target.closest('[data-rm]');if(r){P.photos.splice(+r.dataset.rm,1);renderPhotos();return}
  if(e.target.closest('#addPh'))$('#phI').click();});
function shrink(file){return new Promise((res,rej)=>{const fr=new FileReader();fr.onerror=rej;fr.onload=()=>{const im=new Image();im.onerror=rej;im.onload=()=>{
  const k=Math.min(1,800/Math.max(im.width,im.height));const cv=document.createElement('canvas');cv.width=Math.round(im.width*k);cv.height=Math.round(im.height*k);
  cv.getContext('2d').drawImage(im,0,0,cv.width,cv.height);res(cv.toDataURL('image/jpeg',.8))};im.src=fr.result};fr.readAsDataURL(file)})}
$('#phI').onchange=async e=>{const files=[...e.target.files].filter(f=>f.type.startsWith('image/'));e.target.value='';
  const room=5-P.photos.length;if(files.length>room)toast('Maksimal 5 foto');
  for(const f of files.slice(0,room)){if(f.size>10*1024*1024){toast(f.name+' lebih dari 10 MB');continue}
    try{P.photos.push(await shrink(f))}catch(_){toast('Gagal membaca '+f.name)}}
  $('#e-photos').textContent='';renderPhotos();};
function renderMode(){document.querySelectorAll('#seg button').forEach(b=>b.classList.toggle('on',b.dataset.m===P.mode));
  ['Sell','Swap','Donate'].forEach(m=>$('#m'+m).hidden=P.mode!==m);}
$('#seg').onclick=e=>{const b=e.target.closest('[data-m]');if(!b)return;P.mode=b.dataset.m;$('#e-mode').textContent='';renderMode()};
$('#pP').oninput=e=>{const n=e.target.value.replace(/\D/g,'').slice(0,9);e.target.value=n?Number(n).toLocaleString('id-ID'):''};
function renderCod(){const c=campus();
  $('#map').innerHTML=`<svg class="bg" viewBox="0 0 100 60" preserveAspectRatio="none"><path d="M0 40 C25 34 40 48 60 38 S90 30 100 34" stroke="#fff" stroke-width="3.5" fill="none"/><path d="M48 0 C46 20 54 40 50 60" stroke="#fff" stroke-width="2.5" fill="none"/><rect x="8" y="6" width="22" height="12" rx="2" fill="#DCE8D4"/><rect x="62" y="44" width="26" height="12" rx="2" fill="#DCE8D4"/><circle cx="84" cy="12" r="7" fill="#CFE0C5"/></svg>`
   +c.cod.map((n,i)=>`<button type="button" class="pin ${P.cod===i?'on':''}" style="left:${PINPOS[i][0]}%;top:${PINPOS[i][1]+14}%" data-cod="${i}"><span class="dot">${svg('pin')}</span><small>${esc(n)}</small></button>`).join('');
  $('#cods').innerHTML=c.cod.map((n,i)=>`<label><input type="radio" name="cod" value="${i}" ${P.cod===i?'checked':''}><span><b style="font-weight:500">${esc(n)}</b><span>${c.s} · area kampus</span></span></label>`).join('');}
const pickCod=i=>{P.cod=i;$('#e-cod').textContent='';renderCod()};
$('#map').onclick=e=>{const p=e.target.closest('[data-cod]');if(p)pickCod(+p.dataset.cod)};
$('#cods').onchange=e=>pickCod(+e.target.value);
['pT','pK','pC','pP','pW'].forEach(id=>$('#'+id).addEventListener('input',()=>{const m={pT:'title',pK:'cat',pC:'cond',pP:'price',pW:'wish'}[id];$('#e-'+m).textContent=''}));
$('#postX').onclick=()=>{const dirty=P.photos.length||$('#pT').value.trim();
  if(dirty)modal(`<h2>Batalkan posting?</h2><p>Foto dan isian yang sudah kamu buat akan hilang.</p><div class="row2"><button class="btn ghost" data-close>Lanjut isi</button><button class="btn" id="disc">Buang</button></div>`),$('#disc').onclick=()=>{closeModal();go('home')};
  else go('home');};
$('#postF').onsubmit=e=>{e.preventDefault();const er={};
  const t=$('#pT').value.trim(),k=$('#pK').value,c=$('#pC').value,price=+$('#pP').value.replace(/\D/g,''),w=$('#pW').value.trim();
  if(!P.photos.length)er.photos='Tambahkan minimal 1 foto barang.';
  if(t.length<3)er.title='Nama barang minimal 3 karakter.';
  if(!k)er.cat='Pilih kategori.';if(!c)er.cond='Pilih kondisi.';
  if(!P.mode)er.mode='Pilih mode Sell, Swap, atau Donate.';
  if(P.mode==='Sell'&&!(price>=1000))er.price='Isi harga minimal Rp1.000.';
  if(P.mode==='Swap'&&w.length<3)er.wish='Tulis barang yang ingin kamu dapatkan.';
  if(P.cod===null)er.cod='Pilih satu titik COD.';
  ['photos','title','cat','cond','mode','price','wish','cod'].forEach(f=>$('#e-'+f).textContent=er[f]||'');
  const first=Object.keys(er)[0];if(first){$('#e-'+first).scrollIntoView({block:'center',behavior:'smooth'});return}
  const it={id:'u'+Date.now(),mine:true,t,k,c,m:P.mode,p:P.mode==='Sell'?price:undefined,w:P.mode==='Swap'?w:undefined,cod:P.cod,
    d:$('#pD').value.trim(),img:P.photos.slice(),by:S.user.name,fac:'',campus:S.user.campus,ts:Date.now(),verified:true};
  S.items.unshift(it);save();toast('Barang berhasil diposting');go('detail',{id:it.id});};

/* detail */
function renderDetail(id){const i=all().find(x=>x.id===id);const c=campus();const el=$('#detail');
  if(!i){go('home');return}
  el.innerHTML=`<div class="gal"><div class="track" id="trk">${i.img.map(s=>`<img src="${s}" alt="">`).join('')}</div>
   <div class="tb"><button id="dBack" aria-label="Kembali">${svg('left')}</button><span style="display:flex;gap:8px"><button data-lock="Bagikan barang">${svg('share')}</button><button data-lock="Simpan ke favorit">${svg('heart')}</button></span></div>
   <span class="cnt" id="cnt">1/${i.img.length}</span></div>
  <div class="dbody">
   <div class="dtags"><span class="mtag m-${i.m}">${i.m}</span><span>${esc(i.k)}</span><span>${esc(i.c)}</span></div>
   <h1>${esc(i.t)}</h1>
   <div class="dpr">${i.m==='Sell'?rp(i.p):i.m==='Swap'?'Tukar barang':'Gratis'}</div>
   ${i.m==='Swap'?`<div style="font-size:13px;color:var(--mut);margin-top:2px">Ingin ditukar dengan: <b style="color:var(--swap)">${esc(i.w)}</b></div>`:''}
   <div style="font-size:11.5px;color:var(--mut);margin-top:6px">Diposting ${ago(i.ts)} lalu</div>
   <div class="box"><div class="seller"><div class="av">${esc(i.by[0])}</div><div><b>${esc(i.by)}${i.mine?' (kamu)':''} <span class="vb">${VB}</span></b><small>${c.s}${i.fac?' · '+i.fac:''}</small></div></div>
    <div class="verif">${VB}<span><b>Mahasiswa terverifikasi</b><br>Email kampus @${esc(c.dom)} sudah dikonfirmasi lewat OTP.</span></div></div>
   <div class="box"><h3>Titik COD</h3><div class="codrow"><div class="ic">${svg('pin')}</div><div><b>${esc(c.cod[i.cod])}</b><span>${c.n} · ${c.loc}</span></div></div></div>
   ${i.d?`<div class="box"><h3>Deskripsi</h3><p>${esc(i.d)}</p></div>`:''}
  </div>
  <div class="dfoot">${i.mine?`<button class="btn ghost" id="dHome">Lihat di beranda</button>`:`<button class="btn" data-lock="Chat dengan pemilik barang">${svg('chat')}Chat pemilik ${svg('lock')}</button>`}</div>`;
  $('#dBack').onclick=()=>go('home');if($('#dHome'))$('#dHome').onclick=()=>go('home');
  const trk=$('#trk');trk.onscroll=()=>{$('#cnt').textContent=(Math.round(trk.scrollLeft/trk.clientWidth)+1)+'/'+i.img.length};}

/* profile */
function renderProfile(){const c=campus();$('#pfAv').textContent=S.user.name[0];$('#pfN').innerHTML=esc(S.user.name)+` <span class="vb">${VB}</span>`;
  $('#pfE').textContent=S.user.email;$('#pfV').innerHTML=VB+`<span><b>Terverifikasi via OTP</b><br>Lencana ini tampil di setiap barang yang kamu posting.</span>`;
  $('#pfC').textContent=c.s;$('#pfP').textContent=S.items.filter(i=>i.mine&&i.campus===S.user.campus).length;}
$('#logout').onclick=()=>{try{localStorage.removeItem(KEY)}catch(e){}S={onb:0,email:'',user:null,items:[],filter:'Semua'};$('#emailI').value='';go('onb')};

hydrate(document);
go(S.user?.campus?'home':'onb');
})();
