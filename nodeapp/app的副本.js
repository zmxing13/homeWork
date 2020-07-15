//引用
const fs = require('fs');
var publicClass = require('./PublicClass');

//---变量
var ProjectName = "NodeTest";
var num=0;
var filePath=[
    './student/cover.jpg',
    './teacher/cover.jpg'
];

//---
function onStart(){
    for (let i in filePath){
        publicClass.copyFile('./cover.jpg',filePath[i],()=>{
            num++;
            console.log('copyImg Done');
            if(num==filePath.length){
                console.log('create file',num,filePath.length);
                publicClass.findFile('./同城端/',ProjectName,(e)=>{
                    if(e){
                        console.log('文件夹已存在->拷贝学生，教师文件夹');
                        // copyS_T_File('./student/','./teacher/','./同城端/NodeTest/')
                    }else{

                        var _tm=0;
                        publicClass.createProjectFile('./同城端/',ProjectName,()=>{

                            publicClass.createProjectFile('./同城端/NodeTest/','student',()=>{
                                _tm++;
                                if(_tm>=2){
                                    // copyS_T_File('./student/','./teacher/','./同城端/NodeTest/')
                                }
                            })
                            publicClass.createProjectFile('./同城端/NodeTest/','teacher',()=>{
                                _tm++;
                                if(_tm>=2){
                                    // copyS_T_File('./student/','./teacher/','./同城端/NodeTest/')
                                }
                            })
                            console.log('文件夹创建成功->拷贝学生，教师文件夹');

                        });
                    }
                })
            }
        })
    }
}
/** 教师，学生文件拷贝至指定路径下
 * @param   _stuFile     学生文件
 * @param   _teaFile     教师文件
 * @param   _tarPath     目标路径
 */
function copyS_T_File(_stuFile,_teaFile,_tarPath){
    if(_stuFile!=''){
        publicClass.copyDir(_stuFile,_tarPath+'student/');
    }
    if(_stuFile!=''){
        publicClass.copyDir(_teaFile,_tarPath+'teacher/');
    }
}

// function _copy(src, dist) {
//     var paths = fs.readdirSync(src)
//     paths.forEach(function(p) {
//       var _src = src + '/' +p;
//       var _dist = dist + '/' +p;
//       var stat = fs.statSync(_src)
//       if(stat.isFile()) {// 判断是文件还是目录
//         fs.writeFileSync(_dist, fs.readFileSync(_src));
//       } else if(stat.isDirectory()) {
//         copyDir(_src, _dist)// 当是目录是，递归复制
//       }
//     })
//   }
// /*
//  * 复制目录、子目录，及其中的文件
//  * @param src {String} 要复制的目录
//  * @param dist {String} 复制到目标目录
//  */
// function copyDir(src,dist){
//     var b = fs.existsSync(dist)
//     console.log("dist = " + dist)
//     if(!b){
//       console.log("mk dist = ",dist)
//       mkdirsSync(dist);//创建目录
//     }
//     console.log("_copy start")
//     _copy(src,dist);
// }
  
// function createDocs(src,dist,callback){
//     console.log("createDocs...")
//     copyDir(src,dist);
//     console.log("copyDir finish exec callback")
//     if(callback){
//         callback();
//     }
// }


onStart()


