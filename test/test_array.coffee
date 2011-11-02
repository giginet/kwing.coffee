require('../lib/array')

module.exports.testArray = {
  setUp : (callback) ->
    @array = [0...100]
    callback()
  tearDown : (callback) ->
    callback()
  testSize : (test) ->
    test.equal @array.size(), 100
    test.done();
  testDeleteIf : (test) ->
    a = [0...10]
    a.deleteIf (v) ->
      v % 2 == 0
    test.deepEqual(a, [1, 3, 5, 7, 9])
    test.done()
  testFirst : (test) ->
    test.equal(@array.first(), 0)
    test.done()
}
