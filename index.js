//người chăn cừu
// kích thước đàn cừu 
// mỗi tháng lượng lông mỗi con tăng 20%
// khi lượng lông cừu >= 50 => cắt còn 10%
// Lượng lông cắt đc cho vào kho

// Tính lượng tiền thu được sau khi bán lông cừu trong kho
//biết 1 đơn vị lông giá 100k
//45 => 54 (10) => 14 => 14 + 2.8
//0     44         44     44
var arraySheep = [13,42,34,26,45,37,29,41,16,11];
var storage = 0;
var plus = null;
var a = null;
for(var b = 0; b < 24; b++) {
    for (var i = 0; i < 10; i++){
        a = arraySheep[i]*1.2;
        if (a >= 50){
            plus = a-50;
            storage += plus;
            arraySheep[i] = 10;
        }
        else{
            arraySheep[i] = a;
        }
    }
}
var answer = null
answer = storage * 100000;
console.log(answer);
// e lm theo bài huy đấy