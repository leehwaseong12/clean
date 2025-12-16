// 간단한 알림 이메일 (PDF 없이)
function doGet(e) {
  try {
    const customerName = e.parameter.customer || '고객명 없음';
    const location = e.parameter.location || '위치 없음';
    const worker = e.parameter.worker || '담당자 없음';
    
    const toEmail = 'kjg2000914@naver.com';
    
    const subject = "청소 체크리스트 작성 완료 - " + customerName;
    
    const body = "안녕하세요,\n\n" +
      "청소 체크리스트가 작성되었습니다.\n\n" +
      "==========================================\n" +
      "작업 정보\n" +
      "==========================================\n\n" +
      "고객명: " + customerName + "\n" +
      "작업 위치: " + location + "\n" +
      "담당자: " + worker + "\n" +
      "작성일: " + new Date().toLocaleDateString('ko-KR') + "\n\n" +
      "==========================================\n\n" +
      "PDF는 다운로드 폴더에 저장되었습니다.\n\n" +
      "감사합니다.\n\n" +
      "클린한 사람들 드림";
    
    Logger.log('이메일 전송 시작: ' + toEmail);
    
    GmailApp.sendEmail(toEmail, subject, body, {
      name: '클린한 사람들'
    });
    
    Logger.log('이메일 전송 완료!');
    
    return ContentService.createTextOutput('OK');
    
  } catch (error) {
    Logger.log('오류: ' + error.toString());
    return ContentService.createTextOutput('ERROR: ' + error.toString());
  }
}

// PDF 첨부용 (POST 방식)
function doPost(e) {
  try {
    Logger.log('받은 데이터: ' + e.postData.contents);
    
    const data = JSON.parse(e.postData.contents);
    
    const toEmail = 'kjg2000914@naver.com';
    
    const customerName = data.customer_name;
    const location = data.location;
    const worker = data.worker;
    const date = data.date;
    const pdfBase64 = data.pdf_base64;
    const pdfFilename = data.pdf_filename;
    
    Logger.log('받는 사람: ' + toEmail);
    Logger.log('고객명: ' + customerName);
    Logger.log('PDF 파일명: ' + pdfFilename);
    
    const subject = "청소 체크리스트 - " + customerName;
    
    const body = "안녕하세요,\n\n" +
      "클린한 사람들 청소 체크리스트를 보내드립니다.\n\n" +
      "==========================================\n" +
      "작업 정보\n" +
      "==========================================\n\n" +
      "고객명: " + customerName + "\n" +
      "작업 위치: " + location + "\n" +
      "담당자: " + worker + "\n" +
      "작성일: " + date + "\n\n" +
      "==========================================\n\n" +
      "첨부된 PDF 파일을 확인해주세요.\n\n" +
      "감사합니다.\n\n" +
      "클린한 사람들 드림";
    
    const pdfBlob = Utilities.newBlob(
      Utilities.base64Decode(pdfBase64),
      'application/pdf',
      pdfFilename
    );
    
    Logger.log('이메일 전송 시작...');
    
    GmailApp.sendEmail(toEmail, subject, body, {
      attachments: [pdfBlob],
      name: '클린한 사람들'
    });
    
    Logger.log('이메일 전송 완료!');
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Email sent to ' + toEmail
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log('오류 발생: ' + error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
