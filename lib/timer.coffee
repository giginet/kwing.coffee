class Timer
  constructor : (max, repeat=false, time=0, active=false, complete=undefined) ->
    @set(max)
    @_time = time
    @_active = active
    @_onComplete = complete
    @_onUpdate = undefined
    @_repeat = repeat
  set : (max=0) ->
    @_max = max
    @
  play : ->
    @_active = true
    @
  stop : ->
    @_active = false
    @_time = 0
    @
  pause : ->
    @_active = false
    @
  reset : ->
    @_time = 0
    @
  tick : ->
    if @_time < @_max and @_active
      ++@_time
      if @_onUpdate?
        @_onUpdate(@)
      if @_time is @_max
        if @_onComplete?
          @_onComplete(@)
        if @_repeat
          @_time = 0
    @
  now : ->
    @_time
  max : ->
    @_max
  setNow : (@_time) ->
    @
  setOnComplete : (func) ->
    @_onComplete = func
    @
  setOnUpdate : (func) ->
    @_onUpdate = func

  setRepeat : (repeat) ->
    @_repeat = repeat
    @
  isActive : ->
    @_active
  isOver : ->
    @_time >= @_max
