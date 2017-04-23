//start to rub with vue
var arr = Array();
var app = new Vue({
    el: "#myapp",
    data : {
        message : "",
        datestr : ["45 days","75 day","105 days","6 months","9 months","10 months","15 months","18 months","2 years","5 years","10 years"],
        dateres : arr
    },
    methods : {
        blow : function(){
            this.dateres.push("harish");
        }
    }
    
})

$(function(){

    $("#datepicker").datepicker();
    $("#datepicker").datepicker("option", "dateFormat","DD, d MM, yy");
    $("#datepicker").on("change",function(){
      var now = $(this).val();
        app.dateres = app.datestr.map(function(val){
            var num = /\d+/.exec(val); //exetract the number
            var type = /[dmy]/i.exec(val);// search for the year or day string
            var newr = moment(app.message).add(num,type).format("D / M / YYYY");
            return moment(now).add(num,type).format("D / M / YYYY");
        })
    })

})
