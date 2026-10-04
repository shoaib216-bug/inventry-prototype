/* =========================================
   CAREBRIDGE — SHARED APP LOGIC
========================================= */

const T = {
en:{
 brand:"CareBridge",online:"Online",offline:"Offline",
 nav_about:"About",nav_features:"Features",nav_journey:"Care Journey",
 patient_portal:"Patient Portal",staff_portal:"Healthcare Staff",
 sign_in:"Sign In Securely →",continue_otp:"Continue with OTP →",
 logout:"Logout",register_patient:"+ Register Patient",view_all:"View All",
 run_triage:"Run Digital Triage",check_risk:"Check Risk Level",
 mark_present:"Mark Present",mark_absent:"Mark Absent",
 present:"Present",absent:"Absent",send:"Send",
 emergency_sos:"Emergency SOS",nearest_hospitals:"Nearest Hospitals",close:"Close",
 whatsapp_title:"WhatsApp Status Check",med_search_ph:"Search medicine...",
 footer_line:"Ministry of Health & Family Welfare · Government of Maharashtra (prototype)",
side_dashboard:"Dashboard", side_patients:"Patients", side_triage:"Triage", side_referrals:"Referrals", side_followups:"Follow-ups",
stat_todaypatients:"TODAY'S PATIENTS", stat_triagepending:"TRIAGE PENDING", stat_activereferrals:"ACTIVE REFERRALS", stat_followupsdue:"FOLLOW-UPS DUE",
sec_patientqueue:"PATIENT QUEUE", sec_todaypatients:"Today's Patients", sec_digitaltriage:"DIGITAL TRIAGE", sec_quickassess:"Quick Assessment (IMNCI-referenced)",
sec_referraltracking:"REFERRAL TRACKING", sec_closedloop:"Closed-Loop Referrals",
col_patient:"Patient", col_patientid:"Patient ID", col_age:"Age", col_triage:"Triage", col_action:"Action",
sym_breathing:"Difficulty breathing", sym_chestpain:"Severe chest pain", sym_fever:"High fever", sym_headache:"Mild headache",
field_ops:"FIELD OPERATIONS", good_morning:"Good morning, Amina", manage_desc:"Manage patient registration, triage and referrals — works offline."},
hi:{
side_dashboard:"डैशबोर्ड", side_patients:"रोगी", side_triage:"ट्राइएज", side_referrals:"रेफरल", side_followups:"फॉलो-अप",
stat_todaypatients:"आज के रोगी", stat_triagepending:"ट्राइएज लंबित", stat_activereferrals:"सक्रिय रेफरल", stat_followupsdue:"फॉलो-अप देय",
sec_patientqueue:"रोगी कतार", sec_todaypatients:"आज के रोगी", sec_digitaltriage:"डिजिटल ट्राइएज", sec_quickassess:"त्वरित मूल्यांकन (IMNCI-आधारित)",
sec_referraltracking:"रेफरल ट्रैकिंग", sec_closedloop:"क्लोज्ड-लूप रेफरल",
col_patient:"रोगी", col_patientid:"रोगी आईडी", col_age:"आयु", col_triage:"ट्राइएज", col_action:"कार्रवाई",
sym_breathing:"सांस लेने में कठिनाई", sym_chestpain:"गंभीर सीने में दर्द", sym_fever:"तेज़ बुखार", sym_headache:"हल्का सिरदर्द",
field_ops:"क्षेत्रीय कार्य", good_morning:"सुप्रभात, अमीना", manage_desc:"रोगी पंजीकरण, ट्राइएज और रेफरल प्रबंधित करें — ऑफ़लाइन काम करता है।",


 brand:"केअरब्रिज",online:"ऑनलाइन",offline:"ऑफलाइन",
 nav_about:"परिचय",nav_features:"विशेषताएं",nav_journey:"देखभाल यात्रा",
 patient_portal:"रोगी पोर्टल",staff_portal:"स्वास्थ्य कर्मचारी",
 sign_in:"सुरक्षित साइन इन →",continue_otp:"OTP से जारी रखें →",
 logout:"लॉगआउट",register_patient:"+ रोगी पंजीकरण",view_all:"सभी देखें",
 run_triage:"डिजिटल ट्राइएज चलाएं",check_risk:"जोखिम स्तर जांचें",
 mark_present:"उपस्थित करें",mark_absent:"अनुपस्थित करें",
 present:"उपस्थित",absent:"अनुपस्थित",send:"भेजें",
 emergency_sos:"आपातकालीन SOS",nearest_hospitals:"निकटतम अस्पताल",close:"बंद करें",
 whatsapp_title:"व्हाट्सएप स्टेटस जांच",med_search_ph:"दवा खोजें...",
 footer_line:"स्वास्थ्य एवं परिवार कल्याण मंत्रालय · महाराष्ट्र सरकार (प्रोटोटाइप)"
},
mr:{

side_dashboard:"डॅशबोर्ड", side_patients:"रुग्ण", side_triage:"ट्रायएज", side_referrals:"संदर्भ", side_followups:"फॉलो-अप",
stat_todaypatients:"आजचे रुग्ण", stat_triagepending:"ट्रायएज प्रलंबित", stat_activereferrals:"सक्रिय संदर्भ", stat_followupsdue:"फॉलो-अप देय",
sec_patientqueue:"रुग्ण रांग", sec_todaypatients:"आजचे रुग्ण", sec_digitaltriage:"डिजिटल ट्रायएज", sec_quickassess:"जलद मूल्यांकन (IMNCI-आधारित)",
sec_referraltracking:"संदर्भ ट्रॅकिंग", sec_closedloop:"क्लोज्ड-लूप संदर्भ",
col_patient:"रुग्ण", col_patientid:"रुग्ण आयडी", col_age:"वय", col_triage:"ट्रायएज", col_action:"कृती",
sym_breathing:"श्वास घेण्यास त्रास", sym_chestpain:"तीव्र छातीत दुखणे", sym_fever:"तीव्र ताप", sym_headache:"सौम्य डोकेदुखी",
field_ops:"क्षेत्रीय कामकाज", good_morning:"सुप्रभात, अमिना", manage_desc:"रुग्ण नोंदणी, ट्रायएज आणि संदर्भ व्यवस्थापित करा — ऑफलाइन काम करते.",

 brand:"केअरब्रिज",online:"ऑनलाइन",offline:"ऑफलाइन",
 nav_about:"परिचय",nav_features:"वैशिष्ट्ये",nav_journey:"काळजी प्रवास",
 patient_portal:"रुग्ण पोर्टल",staff_portal:"आरोग्य कर्मचारी",
 sign_in:"सुरक्षित साइन इन →",continue_otp:"OTP ने सुरू ठेवा →",
 logout:"लॉगआउट",register_patient:"+ रुग्ण नोंदणी",view_all:"सर्व पाहा",
 run_triage:"डिजिटल ट्रायएज चालवा",check_risk:"जोखीम पातळी तपासा",
 mark_present:"उपस्थित करा",mark_absent:"अनुपस्थित करा",
 present:"उपस्थित",absent:"अनुपस्थित",send:"पाठवा",
 emergency_sos:"आणीबाणी SOS",nearest_hospitals:"जवळचे रुग्णालय",close:"बंद करा",
 whatsapp_title:"व्हॉट्सअॅप स्टेटस तपासणी",med_search_ph:"औषध शोधा...",
 footer_line:"आरोग्य व कुटुंब कल्याण मंत्रालय · महाराष्ट्र शासन (प्रोटोटाइप)"
}};

let lang = localStorage.getItem('cbLang') || 'en';

function applyLanguage(l){
 lang = l || lang;
 localStorage.setItem('cbLang', lang);
 document.querySelectorAll('.langBtn').forEach(b=>b.classList.toggle('active', b.dataset.lang===lang));
 document.querySelectorAll('[data-i18n]').forEach(e=>{
   const k=e.dataset.i18n; if(T[lang][k]!==undefined) e.textContent=T[lang][k];
 });
 document.querySelectorAll('[data-i18n-placeholder]').forEach(e=>{
   const k=e.dataset.i18nPlaceholder; if(T[lang][k]!==undefined) e.placeholder=T[lang][k];
 });
}

/* ===== SAMPLE DATA (shared across dashboards) ===== */
const patients=[
 {id:'CB-10421',name:'Ravi Kumar',age:47,triage:'red'},
 {id:'CB-10422',name:'Shabana Begum',age:34,triage:'yellow'},
 {id:'CB-10423',name:'Ramesh Rao',age:28,triage:'green'}
];
const STEP_SEQ=['Sent','Accepted','Arrived','Completed'];
let referrals=[{id:'CB-10392',patient:'Ravi Kumar',dept:'Cardiology',cur:1},{id:'CB-10388',patient:'Shabana Begum',dept:'Neurology',cur:2}];
const medicines=[{name:'Paracetamol',qty:120,status:'ok'},{name:'ORS Sachets',qty:8,status:'low'},{name:'Iron Folic Acid',qty:0,status:'out'},{name:'Amoxicillin',qty:60,status:'ok'}];
let staff=[{name:'Anjali More',role:'ASHA Worker',present:true},{name:'Deepak Jadhav',role:'ANM',present:true},{name:'Dr. Kavita Rane',role:'Medical Officer',present:false}];
const sosHospitals=[{name:'District Civil Hospital',dist:'6.2 km',phone:'02112-XXXXXX'},{name:'Rural Hospital Baramati',dist:'3.4 km',phone:'02112-YYYYYY'}];

/* ===== OFFLINE TOGGLE ===== */
let online=true;
function toggleOffline(){
 online=!online;
 const b=document.getElementById('offlineBadge');
 if(!b)return;
 b.classList.toggle('off',!online);
 b.innerHTML=''+'<span data-i18n="'+(online?'online':'offline')+'">'+T[lang][online?'online':'offline']+'</span>';
}

/* ===== TRIAGE (ASHA dashboard) ===== */
function runTriage(){
 const symptoms=document.querySelectorAll('.symptom-checkbox:checked');
 const result=document.getElementById('triageResult');
 if(!result)return;
 if(symptoms.length>=3) result.innerHTML=`<div class="triage red-result"><strong><span class="status-marker red"></span>RED — Refer Immediately</strong><p>IMNCI danger sign present. Immediate clinical attention recommended.</p></div>`;
 else if(symptoms.length===2) result.innerHTML=`<div class="triage yellow-result"><strong><span class="status-marker yellow"></span>YELLOW — Monitor Closely</strong><p>Clinical review should be prioritized.</p></div>`;
 else result.innerHTML=`<div class="triage green-result"><strong><span class="status-marker green"></span>GREEN — Routine Care</strong><p>No danger signs. Routine clinical assessment recommended.</p></div>`;
}

/* ===== REFERRAL TRACKER (advance step) ===== */
function advanceReferral(id){
 const r=referrals.find(x=>x.id===id);
 if(r && r.cur<STEP_SEQ.length-1){ r.cur++; renderReferralGrid(); }
}
function renderReferralGrid(){
 const wrap=document.getElementById('referralGrid');
 if(!wrap)return;
 wrap.innerHTML='';
 referrals.forEach(r=>{
  const pillClass=r.cur===STEP_SEQ.length-1?'green-pill':(r.cur>=1?'yellow-pill':'blue-pill');
  const div=document.createElement('div');
  div.className='referral-mini';
  div.innerHTML=`<strong>${r.id}</strong><h3>${r.dept}</h3><p>${r.patient}</p><span class="${pillClass}">${STEP_SEQ[r.cur]}</span>`;
  if(r.cur<STEP_SEQ.length-1){
    const btn=document.createElement('button');
    btn.className='table-button'; btn.style.marginTop='.5rem'; btn.textContent='Advance →';
    btn.onclick=()=>advanceReferral(r.id);
    div.appendChild(btn);
  }
  wrap.appendChild(div);
 });
}

/* ===== STAFF ATTENDANCE (Facility dashboard) ===== */
function renderStaff(){
 const body=document.getElementById('staffBody');
 if(!body)return;
 body.innerHTML='';
 staff.forEach((s,i)=>{
  const tr=document.createElement('tr');
  const pill=s.present?'green-pill':'red-pill';
  const label=s.present?T[lang].present:T[lang].absent;
  const btnLabel=s.present?T[lang].mark_absent:T[lang].mark_present;
  tr.innerHTML=`<td><strong>${s.name}</strong></td><td>${s.role}</td><td><span class="${pill}">${label}</span></td><td></td>`;
  const btn=document.createElement('button');
  btn.className='staff-toggle'; btn.textContent=btnLabel;
  btn.onclick=()=>{staff[i].present=!staff[i].present; renderStaff();};
  tr.lastElementChild.appendChild(btn);
  body.appendChild(tr);
 });
}

/* ===== MEDICINE SEARCH (Facility dashboard) ===== */
function renderMed(){
 const input=document.getElementById('medSearch');
 const body=document.getElementById('medBody');
 if(!body)return;
 const q=(input?input.value:'').toLowerCase();
 body.innerHTML='';
 medicines.filter(m=>m.name.toLowerCase().includes(q)).forEach(m=>{
  const cls=m.status==='ok'?'green-pill':(m.status==='low'?'yellow-pill':'red-pill');
  const label=m.status==='ok'?'In Stock':(m.status==='low'?'Low Stock':'Out of Stock');
  const tr=document.createElement('tr');
  tr.innerHTML=`<td>${m.name}</td><td>${m.qty}</td><td><span class="${cls}">${label}</span></td>`;
  body.appendChild(tr);
 });
}

/* ===== WHATSAPP STATUS CHECK ===== */
function sendChat(){
 const inp=document.getElementById('chatInput');
 const log=document.getElementById('chatLog');
 if(!inp||!log)return;
 const id=inp.value.trim().toUpperCase();
 if(!id)return;
 const um=document.createElement('div'); um.className='chat-msg out'; um.textContent=id; log.appendChild(um);
 const p=patients.find(x=>x.id===id);
 const ref=referrals.find(r=>p && r.patient===p.name);
 let reply;
 if(!p) reply='No record found for this ID.';
 else if(ref) reply=p.name+': '+STEP_SEQ[ref.cur];
 else reply=p.name+': No active referral.';
 const bm=document.createElement('div'); bm.className='chat-msg in'; bm.textContent=reply; log.appendChild(bm);
 inp.value=''; log.scrollTop=log.scrollHeight;
}

/* ===== SOS MODAL ===== */
function triggerSOS(){
 const modal=document.getElementById('sosModal');
 const body=document.getElementById('sosBody');
 if(body){
   body.innerHTML='';
   sosHospitals.forEach(h=>{
    const div=document.createElement('div'); div.className='sos-hospital';
    div.innerHTML=`<b>${h.name}</b><br>${h.dist} · ${h.phone}`;
    body.appendChild(div);
   });
 }
 if(modal) modal.classList.add('show');
}
function closeModal(){ document.querySelectorAll('.modal').forEach(m=>m.classList.remove('show')); }

/* ===== NAV / AUTH HELPERS ===== */
function demoLogin(role){ localStorage.setItem('carebridgeRole', role); }
function logout(){ localStorage.removeItem('carebridgeRole'); window.location.href='../index.html'; }
function goTo(page){ window.location.href=page; }
function addQueue(){
 const tok=document.getElementById('queueBody');
 if(!tok)return;
 const tr=document.createElement('tr');
 tr.innerHTML=`<td>A${14+tok.children.length}</td><td>New Patient</td><td><span class="yellow-pill">Waiting</span></td>`;
 tok.appendChild(tr);
}

document.addEventListener('DOMContentLoaded',()=>{
 document.querySelectorAll('.langBtn').forEach(b=>{ b.onclick=()=>applyLanguage(b.dataset.lang); });
 applyLanguage(lang);
 renderReferralGrid();
 renderStaff();
 renderMed();
});
