/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

'use strict';

$(document).ready(function() {

  // jQuery variables attached to DOM elements
  var $error = $('.error'),
    $errorMsg = $('.errorMsg'),
    $loading = $('.loading'),
    $results = $('.results'),
    $classification = $('.classification'),
    $confidence = $('.confidence'),
    $question = $('.questionText'),
    $meaning = $('#meaningResult');


  $('.ask-btn').click(function() {
    askQuestion($question.val());
    $question.focus();
  });

  $('.questionText').keyup(function(event){
    if(event.keyCode === 13) {
      askQuestion($question.val());
    }
  });
    

  // Ask a question via POST to /
  var askQuestion = function(question) {
    if ($.trim(question) === '')
      return;

    $question.val(question);

    $loading.show();
    $error.hide();
    $results.hide();

    $.post('/', {text: question})
      .done(function onSucess(answers){
        $results.show();
        $loading.hide()
        $classification.text(answers.top_class);
        document.getElementById("meaningResult").innerHTML = getMeaning(answers.top_class)
        $confidence.text(Math.floor(answers.classes[0].confidence * 100)+ ' %');
        $('html, body').animate({ scrollTop: $(document).height() }, 'fast');
      })
      .fail(function onError(error) {
        $error.show();
        $errorMsg.text(error.responseJSON.error ||
         'There was a problem with the request, please try again');
      })
      .always(function always(){
        $loading.hide();
      });
  };

  [
    'innocent',
    'similar type',
    'learned man'
  ].forEach(function(question){
    $('<a>').text(question)
      .mousedown(function() {
        askQuestion(question);
        return false;
      })
      .appendTo('.example-questions');
  });


});


