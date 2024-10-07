
    
        function performTask(callback) {
            document.getElementById('output').textContent = "Performing a task...";
            setTimeout(() => {
                document.getElementById('output').textContent += "\nTask is complete!";
                callback(); 
            }, 2000); 
        }

      
        function onTaskComplete() {
            document.getElementById('output').textContent += "\nCallback function: Task comp";
        }

  
        document.getElementById('startProcessBtn').addEventListener('click', () => {
            performTask(onTaskComplete); 
        });
    