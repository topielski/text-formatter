import React from 'react'
import axios from 'axios'
import MainBody from './MainBody'
import SideBarBody from './SideBarBody'
import ParagraphSection from './ParagraphSection'
import InputFieldSection from './InputFieldSection'
import { pages_url } from '../config/Globals'
import { EditorState } from 'draft-js'

class EditSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hashId: this.props.match.params.hashId
    }
  }
  render() {
    return (
      <div>
        <MainBody />
        <div className='col-lg-8 col-lg-offset-2'>
          <ParagraphSection
            hashId={this.state.hashId}
          />
          <InputFieldSection>
          </InputFieldSection>
        </div>
        <SideBarBody />
      </div>
    )
  }
}

export default EditSection