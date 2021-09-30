const student_info = []; //declaring an array
let view_info; //declaring variable for arrow function
const view_element = document.querySelector("#stdent_details"); //accessing list from html
view_info = () => {
  //declring of arrow function
  let student_text_name = document.querySelector("#name").value; //accessing name written by user in html to java script
  let student_text_number = document.querySelector("#phNumber").value; //accessing phone numbe written by user in html to java script
  let student_text_mail = document.querySelector("#mail").value; //accessing mail written by user in html to java script
  if (
    //if condition with or logic to check nothing is empty
    student_text_name == "" ||
    student_text_number == "" ||
    student_text_mail == ""
  ) {
    return;
  } else {
    //creating an object which contains details of student
    const viewObject = {
      id: student_info.length, //assigning a id by arrow arrow index
      Name: student_text_name, //assigning name
      pNumber: student_text_number, //assigining number
      Mail: student_text_mail, //assigining mail
    };
    student_info.unshift(viewObject); //adding the object to array
    view_element.innerHTML = ""; //clearing the data given by user
    document.querySelector("#name").value = ""; //clearing the data given by user
    document.querySelector("#phNumber").value = ""; //clearing the data given by user
    document.querySelector("#mail").value = ""; //clearing the data given by user
    display_info(); //call function display_info
  }
};
function display_info() {
  //declaring the function display_info
  student_info.forEach((item) => {
    //creating for loop function for array and passing a parameter arrow function which has a single parameter named item
    const list_element_1 = document.createElement("li"); //creating <li></li> tag from java script
    list_element_1.innerHTML = item.Name; //giving name to list tag
    const list_element_2 = document.createElement("li"); //creating <li></li> tag from java script
    list_element_2.innerHTML = item.pNumber; //giving number to list tag
    const list_element_3 = document.createElement("li"); //creating <li></li> tag from java script
    list_element_3.innerHTML = item.Mail; //giving mail to list tag
    const list_element_4 = document.createElement("li");//creating <li></li> tag from java script
    list_element_4.innerHTML = "----------------------------"; //giving line to list tag
    list_element_1.setAttribute("data_name", item.id); //creating an attribute and giveing attribute value
    list_element_2.setAttribute("data_number", item.id); //creating an attribute and giveing attribute value
    list_element_3.setAttribute("data_mail", item.id); //creating an attribute and giveing attribute value
    list_element_4.setAttribute("data_none", item.id); //creating an attribute and giveing attribute value
    view_element.appendChild(list_element_1); //displaying user written values by appendChild will add the values to list tag
    view_element.appendChild(list_element_2); //displaying user written values by appendChild will add the values to list tag
    view_element.appendChild(list_element_3); //displaying user written values by appendChild will add the values to list tag
    view_element.appendChild(list_element_4);//displaying user written values by appendChild will add the values to list tag
  });
}
// note: all the console log functions were delated after debugging
