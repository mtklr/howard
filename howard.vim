" format note source, replace fancy quotes, sort
command! HowardPrepFortune :normal 1G:%s/[“”]/"/g<CR>:%s/[‘’]/'/g<CR>:%!LC_ALL=C sort -df<CR>

" sort, format fortune file after it's been updated
command! HowardFormatFortune :normal 1G/はい<CR>VG:!LC_ALL=C sort -df<CR>V//<CR>kdVG:s/^/%\r/<CR>''dd

" format note text for json, copy to j register
command! HowardPrepJSON :normal 1G:%s/"/\\"/g<CR>:%s/^/{"text": "/<CR>:%s/$/"},/<CR>1G"jyG

" put j register in json, sort, format
command! HowardFormatJSON :normal Gk"jpVGk>?{"title":<CR>jVGk:!LC_ALL=C sort -df<CR>
