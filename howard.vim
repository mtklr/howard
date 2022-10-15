" format note source, replace fancy quotes, sort
command! HowardPrepNotes :normal 1G:%s/[“”]/"/eg<CR>:%s/[‘’]/'/eg<CR>:%!LC_ALL=C sort -df<CR>

" sort, format fortune file after it's been updated
command! HowardUpdateFortune :normal 1G/はい<CR>VG:!LC_ALL=C sort -df<CR>V//<CR>kdVG:s/^/%\r/e<CR>''dd1G"ty$

" format note text for json, copy to j register
command! HowardPrepJSON :normal 1G:%s/"/\\"/eg<CR>:%s/^/{"text": "/e<CR>:%s/$/"},/e<CR>1G"jyG

" put j register in json, sort, format
" add title from t register (created above)
command! HowardUpdateJSON :normal Gk"jpVGk>?{"title":<CR>jVGk:!LC_ALL=C sort -df<CR>G?"title":<CR>yypWldt""tP
