test_array = [1,2,3]
new_array = test_array.map(element=>element+'追加文言')
q_array = test_array.filter(element=>(element === 2))
find_result = test_array.find(element=>(element === 3))

new_array2 = test_array.map(element=>element+'追加文言').filter(element=>element.startsWith("2"))