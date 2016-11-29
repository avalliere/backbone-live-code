// src/app/models/task.js
import Backbone from 'backbone';

var Task = Backbone.Model.extend({
  defaults: {
    title: "Unknown Task",
    description: "placeholder description",
    complete: false
  },
  initialize: function() {
    console.log("Created new task with title " + this.title);
  },
  toggleComplete: function() {
    var newStatus = !(this.get('complete'));
    this.set('complete', newStatus);
  }
});

export default Task;