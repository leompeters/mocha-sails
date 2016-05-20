/**
 * Created by Leo M. <leomperes@belanton.com> on 5/6/16.
 */

var HelloController = require('../../api/controllers/HelloController'),
  sinon = require('sinon'),
  assert = require('assert');

describe('The Hello Controller', function() {
  describe('when we invoke the index action', function() {
    it('should return hello world message', function() {

      // Mocking res.send() method by using a sinon spy
      var send = sinon.spy();

      // Executes controller action
      HelloController.index(null, {
        'send': send
      });

      // Asserts send() method was called and that it was called
      // with the correct arguments: 'Hello World'
      assert(send.called);
      assert(send.calledWith({message: 'Hello World'}));
    });
  });
});
