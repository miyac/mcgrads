*-------------------------------------
* labelfont setting
*-------------------------------------
function setlabfont(args)

*** parameter ***
  if( args = 2 )
    'set xlopts 1 5 0.15'
    'set ylopts 1 5 0.15'
    'set clopts 1 1 0.08'
    return
  endif
  if( args = 3 )
    'set xlopts 1 5 0.1'
    'set ylopts 1 5 0.1'
    'set clopts 1 1 0.06'
    return
  endif

  'set xlopts 1 5 0.2'
  'set ylopts 1 5 0.2'
  'set clopts 1 1 0.1'

return