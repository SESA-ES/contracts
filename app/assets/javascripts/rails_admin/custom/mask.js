//= require jquery.inputmask
//= require jquery.inputmask.numeric.extensions

$(document).ready( function() {

 $("#contract_name").inputmask("9999/9999");
 $("#contract_process_number").inputmask("99999999");
 $("#contract_activity").inputmask("99.999.9999.9999.9999");
 $("#contract_expense_item").inputmask("9.9.99.99-99");
 $("#contract_account_source").inputmask("9999999999");

 $("#amendment_process_number").inputmask("99999999");
 $("#amendment_activity").inputmask("99.999.9999.9999.9999");
 $("#amendment_expense_item").inputmask("9.9.99.99-99");
 $("#amendment_account_source").inputmask("9999999999");

 $("#vendor_cnpj").inputmask("99.999.999/9999-99");

 $("#budget_name").inputmask("9999NE99999");

 $("#budget_name").inputmask("9999NE99999");

 $("#invoice_name").inputmask("9999/99999");
 $("#invoice_competency_date").inputmask("99/9999");
 $("#invoice_process_number").inputmask("99999999");


 $("#fine_name").inputmask("999/9999");
 $("#notification_name").inputmask("999/9999");
//52.990.745/0001-49

//$( window ).load( readyFn );
//$("#contract_start_value").inputmask({mask : "9999999999", numericInput: true });

});
