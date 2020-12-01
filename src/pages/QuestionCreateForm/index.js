//import react
import React from "react";

//import component
import NavigationBar from "../../components/NavigationBar";
import QuestionForm from "../../components/QuestionForm";

function QuestionCreateForm() {
    return(
        <div>
            <NavigationBar></NavigationBar>
            <QuestionForm></QuestionForm>
        </div>
    )
}

export default QuestionCreateForm;