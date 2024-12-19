## .env(환경변수) 저장하기
1. 최상위 폴더에 .env 위치
2. REACT_APP_API_KEY="API_KEY"
3. .jsx 파일에 const APIKEY = process.env.REACT_APP_API_KEY; 적용
**주의사항 : .env 파일 "API_KEY" 끝에 (;) 금지**

### .gitignore 파일에 .env 추가

### Git 배포하기
1. package.json 파일에 "homepage" 추가하기
,"homepage": "https://taknarae.github.io/tmdb-movies"

2. package.json 파일에 script 수정하기
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "predeploy": "react-scripts build",
    "deploy": "gh-pages -d build"
  },

3. 터미널에 gh-pages 설치
npm i gh-pages

4. 깃허브 저장소 다시 확인
git remote -v

5. 깃허브 배포하기
npm run deploy


