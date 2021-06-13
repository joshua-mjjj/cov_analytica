import React,  { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import DialogTitle from '@material-ui/core/DialogTitle';
// import { Form } from 'semantic-ui-react'
import ReactCrop from 'react-image-crop'

import 'react-image-crop/dist/ReactCrop.css'

// const classes = useStyles();

class PicUploadNoCrop extends Component {

  constructor(props) {
        super(props)
        this.state = {
            open: false,
            fullWidth: true,
            maxWidth: 'xs',

            src: null,
            crop: {
                unit: "%",
                width: 60,
                aspect: 1 / 1
            },
            croppedImageUrl: null,
        }

         this.handleClickOpen           = this.handleClickOpen.bind(this)
         this.handleClose               = this.handleClose.bind(this)
         this.handleMaxWidthChange      = this.handleMaxWidthChange.bind(this)
         this.handleFullWidthChange     = this.handleFullWidthChange.bind(this)

         this.handleFile                = this.handleFile.bind(this)
         this.handleSubmit              = this.handleSubmit.bind(this)
         this.onImageLoaded             = this.onImageLoaded.bind(this)
         this.onCropChange              = this.onCropChange.bind(this)
         this.onCropComplete            = this.onCropComplete.bind(this)
         this.getCroppedImg             = this.getCroppedImg.bind(this)
         this.dataURLtoFile             = this.dataURLtoFile.bind(this)

    }


     handleFile = e => {
      const fileReader = new FileReader()
      fileReader.onloadend = () => {
          this.setState({ src : fileReader.result })
      }   
      fileReader.readAsDataURL(e.target.files[0])
    }

    handleSubmit = e => {
        e.preventDefault()
        // console.log(this.state.croppedImage)
        this.props.setting(this.state.croppedImage)
            
    }

    onImageLoaded = image => {
       this.imageRef = image
    }

    onCropChange = (crop) => {
        this.setState({ crop });
    }

    onCropComplete = crop => {
        if (this.imageRef && crop.width && crop.height) {
            const croppedImageUrl = this.getCroppedImg(this.imageRef, crop)
            this.setState({ croppedImageUrl })
        }
    }


    getCroppedImg(image, crop) {
        const canvas = document.createElement("canvas");
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext("2d");
        
        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
         )

        const reader = new FileReader()
        canvas.toBlob(blob => {
            reader.readAsDataURL(blob)
            reader.onloadend = () => {
                this.dataURLtoFile(reader.result, 'cropped.jpg')
            }
        })
    }

    dataURLtoFile(dataurl, filename) {
        let arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), 
            n = bstr.length, 
            u8arr = new Uint8Array(n);
                
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        let croppedImage = new File([u8arr], filename, {type:mime});
        this.setState({croppedImage: croppedImage }) 
    }


   handleClickOpen(){
     this.setState({open: true })
  };

   handleClose(){
    this.setState({open: false })
  };

   handleMaxWidthChange(event){
    this.setState({ maxWidth : event.target.value  })
  };

   handleFullWidthChange(event){
    this.setState({ fullWidth : event.target.checked })
  };

  render() {

     const { crop, profile_pic, src } = this.state

    return (
      <React.Fragment>
        <Button variant="outlined" style={{'marginTop' : '10px', display: "block"}} color="primary" onClick={this.handleClickOpen}>
          upload
        </Button>
        <Dialog
          fullWidth={this.state.fullWidth}
          maxWidth={this.state.maxWidth}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="max-width-dialog-title"
        >
          <DialogTitle id="max-width-dialog-title">Upload an
           image</DialogTitle>

          <DialogContent>

            {/*<DialogContentText>
              You can set my maximum width and whether to adapt or not.
            </DialogContentText>
            <form className={classes.form} noValidate>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="max-width">maxWidth</InputLabel>
                <Select
                  autoFocus
                  value={this.state.maxWidth}
                  onChange={this.handleMaxWidthChange}
                  inputProps={{
                    name: 'max-width',
                    id: 'max-width',
                  }}
                >
                  <MenuItem value={false}>false</MenuItem>
                  <MenuItem value="xs">xs</MenuItem>
                  <MenuItem value="sm">sm</MenuItem>
                  <MenuItem value="md">md</MenuItem>
                  <MenuItem value="lg">lg</MenuItem>
                  <MenuItem value="xl">xl</MenuItem>
                </Select>
              </FormControl>
              <FormControlLabel
                className={classes.formControlLabel}
                control={<Switch checked={this.state.fullWidth} onChange={this.handleFullWidthChange} />}
                label="Full width"
              />
            </form>*/}

            <div> 
              <form onSubmit={this.handleSubmit}>
                  <label htmlFor="profile_pic"></label>
                  {src && (
                      <ReactCrop
                        src={src}
                        crop={crop}
                        onImageLoaded={this.onImageLoaded}
                        onComplete={this.onCropComplete}
                        onChange={this.onCropChange}
                       /> 
                  )}
                  <br/>
                  <input 
                      type='file' 
                      id='profile_pic'
                      style={{ border: '2px solid #cfd7de', display: "block", }}
                      value={profile_pic} 
                      onChange={this.handleFile} 
                  />
                  <br/>
                   <Button  
                        type="submit" 
                        onClick={this.handleClose}
                        variant="outlined"
                        style={{  display: "block", }} >
                    save
                  </Button>
              </form>
           </div>

          </DialogContent>

          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }

}

export default (PicUploadNoCrop)
