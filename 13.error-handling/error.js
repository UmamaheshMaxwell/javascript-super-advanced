try {
    // code the may throw error
} catch (ex) {
    // code to executed if an error occurs 
} finally {
    // code to be executed regradless of an error occurs or not 
    // Cleaning up code
    // Close database connections 
    // Close file connections
    // Close netwro connections
}

try {
    var name1 = " name1 " 
    var name2 = " name 2 "
    var name3 = name1 + name2
   
} finally {

}

//var output = getMessage('Hello', 'Uma')

try {
    var output = getMessage('Hello', 'Uma')

} catch(ex) {
    console.log(ex.message)
} finally {
    console.log('This will execute always')
}

try {
    var output = "Hello"
} catch(ex) {
    console.log(ex.message)
} finally {
    console.log('This will execute always')
}

// throw 
try {
    throw "Error Occured"
} catch(ex) {
    console.log(ex)
}

// throw with Error Info
try {
    throw {
        number : 101,
        message: 'This id is duplicated'
    }
} catch (ex) {
    console.log(ex.number, ex.message)
}

try {
    throw new Error('There an error')
  } catch (hello) {
    console.error(hello.name + ': ' + hello.message)
    console.warn('I am warining you')
    console.info('This is for your information')
  }
