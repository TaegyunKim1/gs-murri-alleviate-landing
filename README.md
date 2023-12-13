Nextjs(page) + styled-components + chakra ui

전체적인 퍼블리싱은 styled-components로 구성하였고 chakra ui는 complete 페이지의 input 부분을 빠르게 구현하기 위하여 부분 사용하였다.

기본적인 nextjs 가이드에 따라, pages 폴더에 tsx(jsx)코드가 구성되어 있고 libs파일에 pages 폴더 내의 tsx를 보조하는 styles이나 data 코드들로 구성되어 있다.

package.json의 "dev-deploy" scripts를 사용하면 dev서버로 빌드와 동시에 배포가 진행된다.
혹여나 yarn으로 실행되지 않으면 npx next build && npx firebase deploy를 직접 타이핑하여 할 것
(firebase 계정이 접근이 되어야 가능하다)
