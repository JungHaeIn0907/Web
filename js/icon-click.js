function showErrorType(el) {

  const classNm = el.className;

  switch (classNm) {
    case 'user-btn-id':
      document.querySelector('.err-text-id').style.display = "block";
    break;
    case 'user-btn-password':
      document.querySelector('.err-text-password').style.display = "block";
    break;  
    case 'user-btn-password-chk':
      document.querySelector('.err-text-password-chk').style.display = "block";
    break;  
    case 'user-btn-name':
      document.querySelector('.err-text-name').style.display = "block";
    break;  
    case 'user-btn-phone':
      document.querySelector('.err-text-phone').style.display = "block";
    break;    
    
    default: 
    break;
  }
  
}
function selectAll(selectAll)  {
  const checkboxes 
       = document.getElementsByName('service-chk');
  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked;
  })
}
