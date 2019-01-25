$(document).ready(function(){
	$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip(); 
});
	
});

var section_id = 1;
var section_selection_id = "";
var sub_section_id = 1;
var sub_section_selection_id = "";
var select_element_id = "";
function add_section() {
    if(select_element_id != "") {
        section_id = section_id + 1;
        var section = "<div class='section clearfix' id='section-" + section_id + "'></div>";
        $("#" + select_element_id).append(section);
    }
    else {
        alert("Please select a section!");
    }
}

/*function section_select(section_element) {
    section_selection_id =  section_element.id;
    console.log(section_selection_id)
}*/

function add_sub_section() {
    sub_section_id = sub_section_id + 1;
    var sub_section = "<div class='sub-section' id='sub-section-"+sub_section_id+"'></div>";
    if(select_element_id != "") {
        $("#"+select_element_id).append(sub_section);
    }
    else {
        alert("Please select a section!");
    }
}

/*
function sub_section_select(sub_section_element) {
   /!* sub_section_selection_id = sub_section_element.id;
    console.log(sub_section_selection_id);*!/
}*/
