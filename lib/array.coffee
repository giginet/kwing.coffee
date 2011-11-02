Array::_index = (index) ->
  if index < 0
    length = @length
    return length + index
  index

Array::at = (index) ->
  @[@_index index]

Array::map = (func) ->
  @[0...@length] = (func value for value in @)

Array::clone = () ->
  @dup()

Array::dup = () ->
  @[0...@length]

Array::each = (func) ->
  (func value for value in @)
  @

Array::eachIndex = (func) ->
  (func index for index in [0...@length])
  @

Array::eachWithIndex = (func) ->
  (func @[index], index for index in [0...@length])
  @

Array::deleteAt = (index) ->
  index = @_index(index)
  if index >= @length
    return undefined
  @splice index, 1

Array::deleteIf = (func) ->
  for index in [0...@length]
    if func @[index]
      @deleteAt index
  @

Array::reject = (func) ->
  before = @length
  @deleteIf func
  if before is @length
    return undefined
  @

Array::isEmpty = ->
  @length is 0

Array::isEql = (other) ->
  return false if @length isnt other.length
  for index in [0...@length]
    if @[index] isnt other[index]
      return false
  true

Array::fill = (val, start=0, end=@length-1) ->
  start = @_index(start)
  end = @_index(end)
  @[start...end] = (val for i in [start...end])
  @

Array::first = ->
  @[0]

Array::last = ->
  last = @_index -1
  @[last]

Array::uniq = ->
  for elem in @
    @deleteIf (val, index) -> 
      val is elem
  @

Array::index = (value) ->
  for index in [0...@length]
    if @[index] is value
      return index
  undefined

Array::indexes = ->
  (@at(index) for index in arguments)
  
Array::rindex = (value) ->
  for index in [@length...0]
    if @[index] is value
      return index
  undefined

Array::flatten = ->
  @

Array::zip = (array) ->
  size = Math.max(@length, array.length)
  ([@[index], array[index]] for index in [0...size])


Array::transpose = ->
  @

Array::compact = ->
  @deleteIf (value) ->
    value is undefined

Array::isInclude = (val) ->
  for elem in @
    if elem is val
      return true
  false

Array::size = ->
  @length

Array::swap = (a, b) ->
  a = @_index a
  b = @_index b
  tmp = @[a]
  @[a] = @[b]
  @[b] = tmp
  @

Array::shuffle = ->
  for i in [0...@length]
    @swap(i, Math.floor(Math.random() * @length))
  @

Array::choice = ->
  @[Math.floor(Math.random() * @length)]

Array::count = (val) ->
  sum = 0
  for elem in @
    if elem is val
      ++sum
  sum

Array::countIf = (func) ->
  sum = 0
  for index in [0...@length]
    if func(@[index], index)
      ++sum
  sum

Array::replace = (other) ->
  @clear
  for i in [0...other.length]
    @[i] = other[i]
  @

Array::nitems = ->
  @clone().compact().size()

Array::insert = (value, index) ->
  @

Array::clear = ->
  @deleteIf ->
    true

Array::max = ->
  max = @first()
  for value in @
    if value > max
      max = value
  max

Array::min = ->
  min = @first()
  for value in @
    if value < min
      min = value
  min
