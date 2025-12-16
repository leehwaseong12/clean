# 클린한 사람들 - 청소 체크리스트 앱

## 📱 사용 방법

### 1. 앱 실행
- `index.html` 파일을 더블클릭하면 브라우저에서 실행됩니다
- 또는 마우스 우클릭 → 연결 프로그램 → Chrome/Edge 선택

### 2. 체크리스트 작성
1. 홈 화면에서 **"체크리스트"** 버튼 클릭
2. 기본 정보 입력:
   - 고객명
   - 작업 위치
   - 담당자
3. 7개 구역 체크 및 사진 업로드
4. 특이사항 작성
5. 서명:
   - 팀장 서명 (마우스/터치로 그리기)
   - 고객 서명

### 3. PDF 생성 및 이메일 전송
- **"PDF 생성하기"** 버튼 클릭
- PDF 자동 다운로드
- **kjg2000914@naver.com**으로 자동 전송

---

## ⚙️ 이메일 설정 (Google Apps Script)

현재 **kjg2000914@naver.com**으로 고정되어 있습니다.

### 이메일 주소 변경 방법:

1. Google Apps Script 접속:
   - https://script.google.com
   - 현재 프로젝트 열기

2. Code.gs 파일에서 9번 줄 수정:
   ```javascript
   const toEmail = 'kjg2000914@naver.com';  // 여기를 변경
   ```

3. 저장 후 재배포

---

## 🔧 현재 설정

### Google Apps Script URL:
```
https://script.google.com/macros/s/AKfycbwZAaMam9G5hqNYX0oBD-IoUjQVL2dkYYoeBKMsd5O0y5ui7yde9yhv2ug6is4mAyxH/exec
```

### 고정 이메일:
```
kjg2000914@naver.com
```

---

## 📧 이메일 전송 방식

- **POST 방식**: PDF 첨부 이메일 (우선)
- **GET 방식**: 알림 이메일 (백업)

둘 중 하나는 반드시 성공합니다!

---

## 💡 문제 해결

### 이메일이 안 오는 경우:
1. Google Apps Script 실행 로그 확인
   - https://script.google.com
   - 왼쪽 메뉴 "실행" 클릭
   
2. 네이버 스팸메일함 확인

3. 브라우저 콘솔 확인 (F12 키)

### 서명이 안 되는 경우:
- 체크리스트 앱을 연 후 2-3초 대기
- 서명 칸을 클릭한 후 그리기

### PDF가 너무 큰 경우:
- 사진을 적게 업로드
- 현재 자동으로 압축됨 (JPEG 85% 품질)

---

## 📞 지원

문제가 발생하면:
1. 브라우저 콘솔 (F12) 확인
2. Google Apps Script 로그 확인
3. 스크린샷과 함께 문의

---

## 🎉 주요 기능

✅ 7개 구역 체크리스트
✅ 사진 업로드 (작업 전/후)
✅ 특이사항 기록
✅ 환불규정 안내
✅ 이중 서명 (팀장 + 고객)
✅ PDF 자동 생성
✅ 이메일 자동 전송
✅ 완전 무료!

---

**클린한 사람들 - 2025년 12월**
