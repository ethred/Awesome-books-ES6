class navigater {
        lists=() => {
          document.getElementById('add-new').style.display = 'none';
          document.getElementById('contactus').style.display = 'none';
          document.getElementById('lists').style.display = 'flex';
          document.getElementById('container').style.display = 'flex';
        }

    addNewBook=() => {
      document.getElementById('lists').style.display = 'none';
      document.getElementById('contactus').style.display = 'none';
      document.getElementById('add-new').style.display = 'flex';
      document.getElementById('container').style.display = 'flex';
    }

    contactus=() => {
      document.getElementById('lists').style.display = 'none';
      document.getElementById('contactus').style.display = 'flex';
      document.getElementById('add-new').style.display = 'none';
      document.getElementById('container').style.display = 'none';
    }
}

export default navigater;