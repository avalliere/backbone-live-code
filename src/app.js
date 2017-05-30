import $ from 'jquery';
import _ from 'underscore';

import Task from 'app/models/task';

var taskTemplate;

var taskData = [
  {
    title: 'Mow the lawn',
    description: 'Must be finished before BBQ on Sat afternoon',
    completed: true
  }, {
    title: 'Go to the Bank',
    description: 'Need to make a transfer'
  }, {
    title: 'Tune the Piano',
    description: 'High C is missing or something???'
  }
];

var readTaskForm = function() {
  var title = $('#title').val();
  $('#title').val('');

  var description = $('#description').val();
  $('#description').val('');

  var completedData = $('#completed-checkbox').prop('checked');
  $('#completed-checkbox').prop('checked', false);

    var formData = {};
    if (titleData && titleData != "") {
      formData["title"] = titleData
    }
    if (descriptionData && descriptionData != "") {
      formData["description"] = descriptionData
    }
    if (completedData && completedData != "") {
      formData["completed"] = completedData
    }
  return formData;
};


var render = function(task) {


  var jsonTask = task.toJSON();

  var generatedHtml = taskTemplate(jsonTask);

  $('.todo-items').append(generatedHtml);

}

// var myTask = new Task(taskData[0]);

$(document).ready(function() {
  taskTemplate = _.template($('#task-item-template').html());

  taskData.forEach(function(rawTask) {
    var task = new Task(rawTask);
    render(task);
  });

  $('#add-task').click(function(event) {
    var formData = readTaskForm();
    console.log(formData);
    var task = new Task(formData);
    render(task);
  })
});
