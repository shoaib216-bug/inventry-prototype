(function () {
  const params = new URLSearchParams(window.location.search);
  const role = params.get('role') || 'asha';
  const config = {
    asha: { title:'ASHA / ANM', heading:'ASHA / ANM Login', description:'Access patient registration, digital triage, referrals and follow-up workflows.', icon:'stethoscope', next:'asha-dashboard.html' },
    doctor: { title:'Doctor', heading:'Doctor Login', description:'Review patient history, consultations, diagnostics and referrals.', icon:'stethoscope', next:'doctor-dashboard.html' },
    admin: { title:'Facility Admin', heading:'Facility Admin Login', description:'Manage queues, referrals, staff attendance, medicines and facility operations.', icon:'hospital', next:'facility-dashboard.html' },
    district: { title:'District Authority', heading:'District Authority Login', description:'Monitor facilities, referral delays, alerts and district-level indicators.', icon:'chart', next:'district-dashboard.html' }
  };
  const c=config[role]||config.asha;
  const set=(id,val)=>{const el=document.getElementById(id); if(el) el.textContent=val;};
  set('roleTitle',c.title); set('loginHeading',c.heading); set('roleDescription',c.description);
  const icon=document.getElementById('loginIcon');
  if(icon) icon.innerHTML='<svg class="ui-icon" aria-hidden="true"><use href="../assets/icons.svg#'+c.icon+'"></use></svg>';
  window.loginStaff=function(){
    const id=(document.getElementById('staffId')||{}).value||'';
    const password=(document.getElementById('password')||{}).value||'';
    if(!id.trim()||!password.trim()){ alert('Please enter your Staff ID and password.'); return; }
    localStorage.setItem('carebridgeRole',role);
    window.location.href=c.next;
  };
})();
