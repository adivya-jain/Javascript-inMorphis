var str = 'the quick brown fox'

const result = str.split(' ')
.map((st)=>
    st[0].toUpperCase() + st.slice(1).toLowerCase()
)
.join(' ')


console.log(result)