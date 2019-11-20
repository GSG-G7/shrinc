# Shrinc  ![Build Status](https://api.travis-ci.com/GSG-G7/shrinc.png?branch=master)      

Medical App that Facilitate reaching to therapists and getting the appropriate therapy :sparkles: :sparkles:

## **Main Problem**    :no_entry_sign:

People who are busy and can't find a therapist quickly and easily or who don't have enough money to ask therapists and get contact with them or who don't know the appropriate type of therapy.
    
## **Problem Solution** :bulb:

Make app to facilitate user reaching to the appropriate therapy and connect with therapist in the right time with less costs.

## **User Stories**  :books:

### **User who want to take a therapy** :pill:
- As a user, I can see a description about the app.
- As a user, I can choose the action I want to do in the app either if it fill Questionnaire or filter therapies by the type.
- As a user, I can visit the website and find out more about the service.
- As a user, I can navigate between main pages in the app. 
- As a user, I can complete a questionnaire that will guide me towards the most suitable therapiest. 
- As a user, I can see list of Therapies according to questionnaire. 
- As a user, I can view therapist's profiles.
- As a user, I can choose to search (filter) for therapists by various categories.
    - location (need to think about implementing this properly).
    - cost (from list of price ranges).
    - speciality (from a list).
    - skype/remote possibilty (yes or no).
- As a user, I can learn more about the different types of therapy available. 
- As a user, I can see Glossary that explain scientific and strange word.
- As a user, I can visit a therapist-specific page to find out more about the service.

### **User who gives proper therapy to patients** :syringe: 
- As a therapist, I can fill out a form to create and submit a profile.

## **User Journey**  :pencil2:

### **User who want to take a therapy** :pill:

As a user I can determine my status by answering a Questionnaire in order to find a specific therapist that I believe he/she will be appropriate for me and I can see list of Therapies according to questionnaire result, or I can choose to search (filter) for therapists by various categories like location, cost, specialty, or even by Skype/remote possibility Or I can visit a therapist profile to get more information about him/her, or learn more about therapists types, and I can see Glossary that explains scientific and strange words and I can move freely using the menu in the app, also I can get more about the app using the description that written in separate about section.

### **User who gives proper therapy to patients** :syringe:
As a therapist I can sign up in the app as a a therapy by filling the form that let me enter full details about me to let the people see my profile and contact with me. 

## **Prototype** :iphone: 
[View Prototype](https://www.figma.com/proto/7ZHosfDL29DQFe7GxPcotT/Shrinc?node-id=1%3A4&scaling=contain) :eyes: :eyes:

![shrinc](https://user-images.githubusercontent.com/29041512/69190823-e7475d80-0b29-11ea-9fd6-782ff9f108b9.png)

## **Technologies**  :computer:
BackEnd: **Node JS** & **Express JS**    
FrontEnd: **React JS**  
Database: **Airtable**  
Styling:  **CSS**   
Libraries: **AntDesign** & **Leaflet**

## **How to Launch App Locally**  :mega:

*  clone this repo by typing this command in the terminal:  
`git clone https://github.com/GSG-G7/shrinc.git`

*  Run `npm i` to install the packages for the app as general.

*  Run `cd client` and `npm i` to install the packages for client- React Js. 

### Database Setup  :clipboard:

#### setup Airtable :triangular_ruler:
* You should login to  [Airtable](https://airtable.com) Account to have access to its API.    
* Create your own Workspace with the fields explained below that it will redirect you to its Documentation API.    
* In The Airtable Documentation you will find [Airtable_KEY ], [Base_ID] environmental variables needed to run app.
* Set the database variables in your .env file as follows.

##### **Airtable Fields**

| field      |  DataType              |
| ---------- | -----------------------|
| fullName   |   Single Line text     |
| email      |      Email             |
| password   |   Single Line text     |
| city       |   Single Line text     |
| priceRange |   Single Line text     |
| type       |   Single Line text     |
| avalibility|   Single Line text     |
| remote     |   Checkbox             |
| skype      |   Single Line text     |
| image      |   Attachment           |
| is_valid   |   Checkbox             |
| postCode   |    Single Line text    |
| approch    |    Single Line text    |
| insurance  |    Multipe select      |
| language   |    Multipe select      |

#### setup Cloudinary :star:
* You should login to [Cloudinary](https://cloudinary.com/) Account.
* You will gain [Cloud_Name], [Cloudinary_KEY], [Cloudinary_SECRET] environmental variables needed to upload images to database.
* Set the database variables in your .env file as follows.

### Database Client Documentation
* [Database Documentation](https://hackmd.io/luNYEmqAQPSA5jETBdmsxQ) :eyes:

### Environment Variables :key:
Environment variables are one of the ways we keep our product safe. If you want to access our app locally you will need to add your own.

First create a [.env](https://github.com/dwyl/env2#create-a-env-file) file in the App route and add the following variables:
```
Airtable_KEY
Base_ID
Cloud_Name
Cloudinary_KEY
Cloudinary_SECRET
```

**Explanation for previous variables**  :scroll:  
* **Airtable_KEY**  :closed_lock_with_key:     
    A personal API key. It’s required in order to use the Airtable API.  

* **Base_ID**   :lock_with_ink_pen:    
    To define which base you want to connect with it.

* **Cloud_Name** :pushpin:        
   To identify The name of your Cloudinary account, This name is assigned to your account during signup (the field can be edited) and it will be listeded in Account Details. 

* **Cloudinary_KEY & Cloudinary_SECRET**  :lock:    
   A pair of access identifiers that will be auto-generated by Cloudinary, the API Key and API Secret, that need to be used for communicating with Cloudinary's API and signing your requests. These identifiers are listed in the Account Details.   

### Start the App :electric_plug:

To start the App Locally you can start server First then start client side or vice versa!
> To run Server, In your terminal Type: 

    `npm run dev` then you should be able to go to [localhost](http://localhost:5000/) 
> To run client side, In your terminal Type:    

    `cd client` > `npm start` then you will be able to run [localhost](http://localhost:3000/) 

Now you can view the app live in the Browser!

## **Team Lead** :sunglasses:
* Abdallah Ammar 

## **Team Members** :smiley:
* Hashem Taha 
* Fadi Omar 
* Mohammad Alhallaq
* Asmaa Thabet

## **Resources**  :mag:
* [Node Js](https://nodejs.org/en/)
* [Express Framework](https://expressjs.com/)
* [Yup library](https://github.com/jquense/yup) 
* [React Library](https://reactjs.org/)
* [Airtable](https://airtable.com/)
* [Cloudinary](https://cloudinary.com/)
* [Ant Design](https://ant.design/)
* [Leaflet](https://leafletjs.com/)
