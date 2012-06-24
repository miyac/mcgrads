*--------------------------------------------
* reference arrowを任意の位置に書く
*--------------------------------------------
function refarrow(args)

  if( args = '' )
    help()
    return
  endif

*** Default value ***
  len     = 'none'
  scale   = 'none'
  scale2  = ''
  direct2 = 'u'
  pos     = 'ur'
  unit    = ''
  unit2   = ''
  offset  = 0

*** Argument ***
  i = 1
  while( 1 )
    arg = subwrd( args, i )
    i = i + 1
    if( arg = '' ) ; break ; endif

    while( 1 )
*** option
      if( arg = '-pos' )   ; pos=subwrd(args,i)   ; i=i+1 ; break ; endif
      if( arg = '-unit' )  ; unit=subwrd(args,i)  ; i=i+1 ; break ; endif
      if( arg = '-unit2' ) ; unit2=subwrd(args,i) ; i=i+1 ; break ; endif
      if( arg = '-offset' ); offset=subwrd(args,i); i=i+1 ; break ; endif
      if( arg = '-pair' )
        scale2=subwrd(args,i)
          if( scale2 < 0 )
            scale2 = -scale2
            direct2 = 'd'
          endif
        i=i+1
        break
      endif        

*** len scale
      if( valnum(arg) != 0 & len = 'none' )
        len = arg
        break
      endif
      if( valnum(arg) !=0 & scale = 'none' )
        scale = arg
        break
      endif

      say 'syntax error: 'arg
      return

    endwhile
  endwhile

***
  if( unit2 = '' ) ; unit2=unit ; endif

****** set refarrow scale
  'set arrscl 'len' 'scale
  'set arrlab off'

*** Setting position ***
  'q gxinfo'
  graphic = sublin(result, 1)
  xlim = sublin(result, 3)
  ylim = sublin(result, 4)
  graphic = subwrd(graphic, 4)
  xs = subwrd(xlim, 4)
  xe = subwrd(xlim, 6)
  ys = subwrd(ylim, 4)
  ye = subwrd(ylim, 6)

  if( scale2 = '' )
    if( pos = 'ur' )
      x = xe - offset
      y = ye + 0.2
    endif
    'set line 1 1 4'
    'draw line 'x-len' 'y' 'x' 'y
    'draw line 'x-0.15' 'y+0.07' 'x' 'y
    'draw line 'x-0.15' 'y-0.07' 'x' 'y
    'set string 1 l 3'
    'set strsiz 0.15'
    'draw string 'x+0.1' 'y' 'scale''unit
  else
    if(direct2 = 'd')
      if( pos = 'ur' )
        x = xe - offset
        y = ye + 0.2 + len
      endif
      'set line 1 1 4'
      'draw line 'x-len' 'y' 'x' 'y
      'draw line 'x-0.05' 'y+0.05' 'x' 'y
      'draw line 'x-0.05' 'y-0.05' 'x' 'y
      'set string 1 l'
      'set strsiz 0.15'
      'draw string 'x+0.1' 'y' 'scale''unit

      'draw line 'x-len' 'y' 'x-len' 'y-len
      'draw line 'x-len-0.05' 'y-len+0.05' 'x-len' 'y-len
      'draw line 'x-len+0.05' 'y-len+0.05' 'x-len' 'y-len
      'set string 1 l'
      'set strsiz 0.15'
      'draw string 'x-len+0.05' 'y-len+0.05' 'scale2''unit2
    endif
    if(direct2 = 'u')
      if( pos = 'ur' )
        x = xe - offset
        y = ye + 0.2
      endif
      'set line 1 1 4'
      'draw line 'x-len' 'y' 'x' 'y
      'draw line 'x-0.05' 'y+0.05' 'x' 'y
      'draw line 'x-0.05' 'y-0.05' 'x' 'y
      'set string 1 l'
      'set strsiz 0.15'
      'draw string 'x' 'y' 'scale''unit

      'draw line 'x-len' 'y' 'x-len' 'y+len
      'draw line 'x-len-0.025' 'y+len-0.05' 'x-len' 'y+len
      'draw line 'x-len+0.025' 'y+len-0.05' 'x-len' 'y+len
      'set string 1 l'
      'set strsiz 0.15'
      'draw string 'x-len+0.05' 'y+len+0.05' 'scale2''unit2
    endif
    
endif


return

function help()
  say ''

return