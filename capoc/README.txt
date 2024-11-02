1-1. gradle 오류 - 외부에서 가져오려는 명령어만 사용하면 관련 오류 계속 뜹니다.
https://gradle.org/next-steps/?version=8.10.2&format=all < 이 사이트 들어가셔서 gradle을 아예 깔아주세요.

1-2. 다운로드를 하게 되면 .zip 파일이 다운됩니다. 압축은 각자 편한 경로로 설정해서 깔아주세요. 단, 해당 파일을 다운한 경로를 기억하고 있어야 합니다.

1-3. [제어판] > [시스템 및 보안] > [시스템] > [고급 시스템 설정]에 들어가 [환경 변수]를 클릭해주세요. 이후 [시스템 변수]의 (Path)를 누르고 편집 눌러주세요.

1-4. bin이 포함된 Gradle 경로를 복사하고, Path 안에 새로 넣어주세요. 이후 cmd를 재시작 한 후 Gradle -v 명령어를 입력하세요. 버전 정보가 뜨면 설치 성공.

1-5. 프로젝트 디렉토리로 이동 후, gradle init 명령어를 실행해 주세요. (정리 목적)

2-1. Directory will be modified and existing files may be overwritten.  Continue? (default: no) [yes, no] 와 같은 문구가 출력된다면, 디렉토리에 있는 내용을 초기화 할 것이냐는 물음입니다. 작업 중인 내용의 여부에 따라 자유롭게 대답해주세요. (Yes를 한다고 해서 코드가 날아가지는 않습니다. 저는 yes 누르고 초기화 했습니다. 단순 캐시 정리로 보여요.)

2-2. 이후 계속 출력되는 질문은 기본값으로 설정해주시면 됩니다. 자주 쓰는 언어에 대해 물어보는 문구도 나올텐데, 이 경우에는 어플리케이션 제작을 기준으로 Kotlin을 선택했습니다.
(자바스크립트랑 호환 O)

3-1. Generate build using new APIs and behavior (some features may change in the next minor release)? (default: no) [yes, no] >> Gradle 빌드 생성 시, 새로운 API와 동작을 사용할 지 묻는 문구입니다. NO를 선택해주세요. (yes도 상관은 없으나, gradle의 일부 기능이 업데이트 되어 변경됩니다. 안정적일지 장담을 못합니다.)

4-1. 프로젝트 파일에서 package.json 파일을 열어주시고, 

"devDependencies": {
  "@react-native-community/cli": "latest"
}

해당 코드를 추가해주세요. 이미 파일 안에 devDependencies가 있다면, 그 안에 내용 코드만 추가해주시면 됩니다.

4-2. package.json 수정 후 cmd에서 npm install로 명령어를 실행해주세요. (or yarn install)

4-3. 이후 프로젝트를 안드로이드로 실행하시면 됩니다.
