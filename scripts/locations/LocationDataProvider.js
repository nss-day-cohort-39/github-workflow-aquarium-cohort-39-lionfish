const locationCollection=[
    

    {tip: "Make sure tank has water"},
   
    {tip: "Clean the poop out on a regular basis"},
   
    {tip: "Make sure to feed them daily"}
   
       
   ]
   
   // making a copy of tipCollection and putting it into useTips
   export const useLocations = () => {
       return locationCollection.slice()
   }