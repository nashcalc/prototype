**Welcome to the NashCalc Prototype** 

**Let's Fix Shit Up!**

**Teletype**
atom://teletype/portal/e97d3888-5fd0-41db-a481-1306b773d513

**Basically name your commit whatever the task name is and update the README, removing it from your assignments** 

**Resources:**
  https://docs.google.com/document/d/1koHvLZkfmVZ1JqvQaXxrCAGBeWYqXPgocr3aKMm2IfA/edit
  
  This might be helpful for us both with phase 1: https://www.youtube.com/watch?v=zgKH12s_95A

**Key Tasks:**
  
  **Ben:**  
  
    App state logic needs to set a row/column floor at 1 (via buttons) 
    
    We have form input data being returned from Form being passed to Grid 
    What we need to do is process it in Grid and save in array format with defined indexes (where they're coming from)
    Each Grid element needs to report its index
    We also need the sub indices/positions of the values in each pair or forms (whether the first or second) 
    
    David suggested reporting grid ID in the for loop (we don't really do this with the current strategy but theoretically can
    Then we have to figure out how to distinguish between the "comma separated" values 
    
  **Ganesh:**
    
   Responsive static header (fix the spacing problem) -- should just be there no fancy stuff yet 
      Finish tutorial here: https://betterprogramming.pub/building-a-basic-header-with-materialui-and-react-js-d650f75b4b0a + next tutorial 
  
  **Unassigned (take what you want and throw it under your name):** 
  
    Python middle-end bridge with Django (https://www.youtube.com/watch?v=s6Xi7x4G7yg)

    Animate adding or removing form cards 
    
    gambit solve for strategic nash eq 
    
    Affix row and col buttons to position on page so they don't move when things are scaled 
    
    Add styling of form 
    
    Scale cards properly 
    
    Make a nice logo maybe (see what we have the rights to do) 
    
    Zoom in and out like google sheets ui: https://blog.logrocket.com/building-inline-editable-ui-in-react/
    
    Buttons are no longer styled and need to be redone (perhaps with the floating action buttons) 
    
    When rows exceed height of screen everything scrolls down whereas when columns exceed width everything gets screwed up and they tend to wrap around 
      Get rid of this behavior and make it such that the whole thing can scroll horizontally to account for width expansion 
  
  **Future Features:** 
  
    Take a look at gambit + other libraries for future feature ideas / opportunities 
      -note that the manner in which we use the python bridge means that we'll have access to other game theory libraries for other features that will all be handled behind the scenes 
      
  **Approximate feature roadmap:** 
    https://docs.google.com/document/d/1RZujZt8qM5HGe2zr7-2UWy83omNnGKIroRp1M7GaRZw/edit
    
