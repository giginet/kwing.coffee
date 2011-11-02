Array.prototype._index = (index) ->
  if index < 0
    length = @length
    return length + index
  index

Array.prototype.at = (index) ->
  @[@_index index]

Array.prototype.map = (func) ->
  @[0...@length] = (func value for value in @)

Array.prototype.clone = () ->
  @dup()

Array.prototype.dup = () ->
  @[0...@length]

Array.prototype.each = (func) ->
  (func value for value in @)
  @

Array.prototype.eachIndex = (func) ->
  (func index for index in [0...@length])
  @

Array.prototype.eachWithIndex = (func) ->
  (func @[index], index for index in [0...@length])
  @

Array.prototype.deleteAt = (index) ->
  index = @_index(index)
  if index >= @length
    return undefined
  @splice index, 1

Array.prototype.deleteIf = (func) ->
  for index in [0...@length]
    if func @[index]
      @deleteAt index
  @

Array.prototype.reject = (func) ->
  before = @length
  @deleteIf func
  if before is @length
    return undefined
  @

Array.prototype.isEmpty = ->
  @length is 0

Array.prototype.isEql = (other) ->
  return false if @length isnt other.length
  for index in [0...@length]
    if @[index] isnt other[index]
      return false
  true

Array.prototype.fill = (val, start=0, end=@length-1) ->
  start = @_index(start)
  end = @_index(end)
  @[start...end] = (val for i in [start...end])
  @

Array.prototype.first = ->
  @[0]

Array.prototype.last = ->
  last = @_index -1
  @[last]

Array.prototype.uniq = ->
  for elem in @
    @deleteIf (val, index) -> 
      val is elem
  @

Array.prototype.index = (value) ->
  for index in [0...@length]
    if @[index] is value
      return index
  undefined

Array.prototype.indexes = ->
  (@at(index) for index in arguments)
  
Array.prototype.rindex = (value) ->
  for index in [@length...0]
    if @[index] is value
      return index
  undefined

Array.prototype.flatten = ->
  @

Array.prototype.zip = (array) ->
  size = Math.max(@length, array.length)
  ([@[index], array[index]] for index in [0...size])


Array.prototype.transpose = ->
  @

Array.prototype.compact = ->
  @deleteIf (value) ->
    value is undefined

Array.prototype.isInclude = (val) ->
  for elem in @
    if elem is val
      return true
  false

Array.prototype.size = ->
  @length

Array.prototype.swap = (a, b) ->
  a = @_index a
  b = @_index b
  tmp = @[a]
  @[a] = @[b]
  @[b] = tmp
  @

Array.prototype.shuffle = ->
  for i in [0...@length]
    @swap(i, Math.floor(Math.random() * @length))
  @

Array.prototype.choice = ->
  @[Math.floor(Math.random() * @length)]

Array.prototype.count = (val) ->
  sum = 0
  for elem in @
    if elem is val
      ++sum
  sum

Array.prototype.countIf = (func) ->
  sum = 0
  for index in [0...@length]
    if func(@[index], index)
      ++sum
  sum

Array.prototype.replace = (other) ->
  @clear
  for i in [0...other.length]
    @[i] = other[i]
  @

Array.prototype.nitems = ->
  @clone().compact().size()

Array.prototype.insert = (value, index) ->
  @

Array.prototype.clear = ->
  @deleteIf ->
    true

Array.prototype.max = ->
  max = @first()
  for value in @
    if value > max
      max = value
  max

Array.prototype.min = ->
  min = @first()
  for value in @
    if value < min
      min = value
  min
