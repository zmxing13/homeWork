const fs = require('fs');
/** 复制文件
 * @param   _copyFile   复制文件路径
 * @param   _tarFile    拷贝文件路径
 * @param   _cb         完成回调
 */
function copyFile(_copyFile,_tarFile,_cb){
    fs.copyFile(_copyFile,_tarFile,(err,res)=>{
        if(err){
            console.log(err);
        }else{
            return _cb();
        }
    })
}
/** 创建文件夹
 * @param   _path       路径
 * @param   _proName    文件名
 * @param   _cb         回调
 */
function createProjectFile(_path,_proName,_cb){
    let tP=_path+_proName;
    // console.log(tP,typeof tP)
    fs.mkdir(tP,{recursive:true},(err)=>{
        if(err){
            return //console.log('-----error:',err);
        }else{
            console.log('done')
            return _cb();
        }
    })
}
/** 查找文件是否存在
 * @param   _filePath   打开文件路径
 * @param   _proName    文件名
 * @param   _cb         回调
 */
function findFile(_filePath,_proName,_cb){
    fs.access(_filePath+_proName,(err)=>{
    // fs.access('./同城端/NodeTest',(err)=>{
        if(err){
            console.log(err)
            return _cb(false);
        }
        return _cb(true);
    })
}


/** 复制目录、子目录，及其中的文件 */
function _copy(src, dist) {
    var paths = fs.readdirSync(src)
    paths.forEach(function(p) {
      var _src = src + '/' +p;
      var _dist = dist + '/' +p;
      var stat = fs.statSync(_src)
      if(stat.isFile()) {// 判断是文件还是目录
        fs.writeFileSync(_dist, fs.readFileSync(_src));
      } else if(stat.isDirectory()) {
        copyDir(_src, _dist)// 当是目录是，递归复制
      }
    })
  }
/*
 * 复制目录、子目录，及其中的文件
 * @param src {String} 要复制的目录
 * @param dist {String} 复制到目标目录
 */
function copyDir(src,dist){
    var b = fs.existsSync(dist)
    console.log("dist = " + dist)
    if(!b){
      console.log("mk dist = ",dist)
      mkdirsSync(dist);//创建目录
    }
    console.log("_copy start")
    _copy(src,dist);
}
  
function createDocs(src,dist,callback){
    console.log("createDocs...")
    copyDir(src,dist);
    console.log("copyDir finish exec callback")
    if(callback){
        callback();
    }
}

module.exports={
    copyFile,
    createProjectFile,
    findFile,
    copyDir,
}