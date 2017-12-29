# Compilation problem in production with webpack

My configuration:
* Windows 10 64bits
* Yarn 1.3.2

1) Clone this project, cd into it

2) Install the dependencies:
 
`yarn install`

3) You need to manually correct https://github.com/mdbootstrap/Angular-Bootstrap-with-Material-Design/issues/36

    In node_modules\angular-bootstrap-md\scss\mdb\free\data\_variables.scss , line 135:
    
    Replace `_$image-path: '../img/';_` by `_$image-path: '../img/' !default;_`

4) The 'dev' build is working:

`yarn start`

5) But I get an error with the 'prod' build:

`yarn build`


ERROR in : TypeError: Cannot read property 'kind' of undefined
    at nodeCanBeDecorated (D:\MEY\temp\mdb-angular-pro\simple-webpack\node_modules\typescript\lib\typescript.js:7934:36)
    at nodeIsDecorated (D:\MEY\temp\mdb-angular-pro\simple-webpack\node_modules\typescript\lib\typescript.js:7954:16)
    at nodeOrChildIsDecorated (D:\MEY\temp\mdb-angular-pro\simple-webpack\node_modules\typescript\lib\typescript.js:7958:16)
    at Object.forEach (D:\MEY\temp\mdb-angular-pro\simple-webpack\node_modules\typescript\lib\typescript.js:1500:30)
    at Object.childIsDecorated (D:\MEY\temp\mdb-angular-pro\simple-webpack\node_modules\typescript\lib\typescript.js:7964:27)
    at getClassFacts (D:\MEY\temp\mdb-angular-pro\simple-webpack\node_modules\typescript\lib\typescript.js:51492:20)
    at visitClassDeclaration (D:\MEY\temp\mdb-angular-pro\simple-webpack\node_modules\typescript\lib\typescript.js:51517:25)
    at visitTypeScript (D:\MEY\temp\mdb-angular-pro\simple-webpack\node_modules\typescript\lib\typescript.js:51376:28)
    at visitorWorker (D:\MEY\temp\mdb-angular-pro\simple-webpack\node_modules\typescript\lib\typescript.js:51189:24)
    at sourceElementVisitorWorker (D:\MEY\temp\mdb-angular-pro\simple-webpack\node_modules\typescript\lib\typescript.js:51221:28)
    at saveStateAndInvoke (D:\MEY\temp\mdb-angular-pro\simple-webpack\node_modules\typescript\lib\typescript.js:51133:27)
    at sourceElementVisitor (D:\MEY\temp\mdb-angular-pro\simple-webpack\node_modules\typescript\lib\typescript.js:51203:20)
    at visitNodes (D:\MEY\temp\mdb-angular-pro\simple-webpack\node_modules\typescript\lib\typescript.js:49517:48)
    at Object.visitLexicalEnvironment (D:\MEY\temp\mdb-angular-pro\simple-webpack\node_modules\typescript\lib\typescript.js:49550:22)
    at visitSourceFile (D:\MEY\temp\mdb-angular-pro\simple-webpack\node_modules\typescript\lib\typescript.js:51463:53)
    at saveStateAndInvoke (D:\MEY\temp\mdb-angular-pro\simple-webpack\node_modules\typescript\lib\typescript.js:51133:27)
    at transformSourceFile (D:\MEY\temp\mdb-angular-pro\simple-webpack\node_modules\typescript\lib\typescript.js:51117:27)
    at D:\MEY\temp\mdb-angular-pro\simple-webpack\node_modules\typescript\lib\typescript.js:2479:86
    at reduceLeft (D:\MEY\temp\mdb-angular-pro\simple-webpack\node_modules\typescript\lib\typescript.js:2186:30)
    at D:\MEY\temp\mdb-angular-pro\simple-webpack\node_modules\typescript\lib\typescript.js:2479:42
    at transformRoot (D:\MEY\temp\mdb-angular-pro\simple-webpack\node_modules\typescript\lib\typescript.js:63992:82)
    at Object.map (D:\MEY\temp\mdb-angular-pro\simple-webpack\node_modules\typescript\lib\typescript.js:1693:29)
    at Object.transformNodes (D:\MEY\temp\mdb-angular-pro\simple-webpack\node_modules\typescript\lib\typescript.js:63980:30)
    at Object.emitFiles (D:\MEY\temp\mdb-angular-pro\simple-webpack\node_modules\typescript\lib\typescript.js:66715:28)
    at emitWorker (D:\MEY\temp\mdb-angular-pro\simple-webpack\node_modules\typescript\lib\typescript.js:70241:33)
    at D:\MEY\temp\mdb-angular-pro\simple-webpack\node_modules\typescript\lib\typescript.js:70203:66
    at runWithCancellationToken (D:\MEY\temp\mdb-angular-pro\simple-webpack\node_modules\typescript\lib\typescript.js:70295:24)
    at Object.emit (D:\MEY\temp\mdb-angular-pro\simple-webpack\node_modules\typescript\lib\typescript.js:70203:20)
    at defaultEmitCallback (D:\MEY\temp\mdb-angular-pro\simple-webpack\node_modules\@angular\compiler-cli\src\transformers\program.js:33:20)
    at AngularCompilerProgram.emit (D:\MEY\temp\mdb-angular-pro\simple-webpack\node_modules\@angular\compiler-cli\src\transformers\program.js:241:30)
