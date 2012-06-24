*-------------------------------------
* initial setting for grads plotting
* revised 2011.12.29
*-------------------------------------
"set display color white"
"set imprun gradsoff"
"set csmooth on"

"q gxinfo"
temp=sublin(result,2)
gxy = subwrd(temp,6)
if( gxy = 8.5 )
  "set parea 0.8 10.4 0.9 8.0"
endif
if( gxy = 10.4 )
  "set parea 0.8 8.5 0.9 10.0"
endif

*** color setting ***
"set map 1"

*** font setting ***
"setlabfont 1"

"c"
