// 请将传入的字符串中，每个单词的第一个字母变成大写并返回
function titleCase(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()).join(' ');
  }
  
  titleCase("I'm a little tea pot");
  console.log(titleCase("I'm a little tea pot"));