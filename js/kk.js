// $(document).on("change", "#examCheckAll", function () {
//     if ($(this).is(":checked")) {
//         var checkNoCheckBox = $("input:checkbox[id=allowedLab]").length
//         if (checkNoCheckBox <= 0) {
//             //Dont show the Charge All Button if there are no checkboxes
//         } else {
//             $(".showHideExamBtn").show()
//             $(".allEmpCharge :checkbox").prop("checked", true)
//             $("#regExam").html('<i class="fa fa-send"></i> Charge All')
//         }
//     } else {
//         $(".showHideExamBtn").hide()
//         $(".allEmpCharge :checkbox").prop("checked", false)
//         $("#regExam").html('<i class="fa fa-send"></i> Charge All')
//     }
// })

// $(document).on("change", "#allowedLab", function () {
//     var allEmpCheckBox = $("input:checkbox[id=allowedLab]").length
//     var checkAllEmpCheck = $("#allowedLab:checked").length
//     if (checkAllEmpCheck  <= 0) {
//         $("#examCheckAll").prop("checked", false)
//         $("#regExam").html('<i class="fa fa-send"></i> Charge All')
//         $(".showHideExamBtn").hide()
//     } else if (checkAllEmpCheck == allEmpCheckBox) {
//         $(".showHideExamBtn").show()
//         $("#examCheckAll").prop("checked", true)
//         $("#regExam").html('<i class="fa fa-send"></i> Charge All')
//     } else {
//         $(".showHideExamBtn").show()
//         $("#examCheckAll").prop("checked", false)
//         $("#regExam").html('<i class="fa fa-send"></i> Charge Selected')
//     }
// });

// $("#regExam").on("click", function () {
//     var selectedEmpToCharge = ""
//     $("input[name='allowedLab']:checked").each(function() {
//         selectedEmpToCharge += this.value + "###"
//     })	
//     var embToBeCharged = selectedEmpToCharge.slice(0, -3)
//     var salChargeMonth = $("#salaryMonthChargeSalaries").val()
//     var post = { "action" : "charge_employee_salaries", "embToBeCharged" : embToBeCharged, "salChargeMonth" : salChargeMonth};
//     swal ({
//         title: "Are you sure ?", text: "You want to charge the salaries of this month?", type: "", showCancelButton: true, confirmButtonText: "Yes", cancelButtonText: "No",
//         closeOnConfirm: false, closeOnCancel: false
//     }, function(isConfirm) {
//         if (isConfirm) {
//             $.ajax({    
//                 method: "POST", url : "api/main.php", data: post, dataType: "JSON",
//                 success : function(data){
//                     var Message = data.Message
//                     var status = data.Status
//                     if (status == true) { swal ({ title: "", text: Message, type: "success", showCancelButton: false, closeOnConfirm: false, closeOnCancel: false }, function(isConfirm) { if (isConfirm) { location.reload(); } }); } else { swal("", Message, "error") }
//                 },
//                 error : function(data){ }
//             })
//         } else { swal("Charge Cancelled", "Salary charge has been cancelled", "error") }
//     })		
// })