(function () {
  /**
   *
   * @param num 总数
   * @param count 排除的序号
   */
  function childNum(num, count) {
    var allPlayer = [];
    //先将编号存入数组
    for (var i = 0; i < num; i++) {
      allPlayer[i] = i + 1;
    }
    var exitcount = 0; //离开人数
    var counter = 0; //记录报数
    var curIndex = 0; //但当前下标
    while (exitcount < num - 1) {
      //报数
      if (allPlayer[curIndex] !== 0) counter++;
      if (counter == count) {
        allPlayer[curIndex] = 0;
        counter = 0;
        exitcount++;
      }
      curIndex++;
      if (curIndex == num) {
        curIndex = 0;
      }
      for (var i = 0; i < num; i++) {
        if (allPlayer[i] !== 0) {
          return allPlayer[i];
        }
      }
    }
  }
})();
