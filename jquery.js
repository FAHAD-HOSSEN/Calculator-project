function insertValue(number){
    var existingNumber = $("#cal_head_id").val();
    $("#cal_head_id").val(existingNumber + number);
}
function clearFunction(){
    $("#cal_head_id").val('');
}
function finalResult(){
    var result = $("#cal_head_id").val();
    var calculate = eval(result);
    $("#cal_head_id").val(calculate);
}
function delectFunction(){
    var currentNumber = $("#cal_head_id").val();
    if(currentNumber != '') {
        $("#cal_head_id").val($("#cal_head_id").val().slice(0,-1));
    }
}
function ansFunction(){
    var result = $("#cal_head_id").val();
    var calculate = eval(result);
    $("#cal_head_id").val(calculate);

}




















// function deperantFundtion(){
//     var currentNumber = $("#cal_head_id").val();
//     if (currentNumber != $("#cal_head_id").val("+" + currentNumber)) {
//       $("#cal_head_id").val("+" + currentNumber);
//     }else{
//         $("#cal_head_id").val("-" + currentNumber);
//     }
// }