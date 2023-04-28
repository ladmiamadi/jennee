import React from 'react'
import PropTypes from 'prop-types'
import TextArea from '@common/input/TextArea'
import { Divider, Typography } from '@mui/material'
import Input from '@common/input/Input'

/**
 *
 * @param member {object} - The member to update
 * @param handleTextareaChange {function}- The function to execute when textArea content is changed
 * @param {Object} dataOnChange - An object containing the state and setState functions for updating the input's value and the name of the input element.
 * @returns {JSX.Element} - The UpdateDetailsMember component
 * @constructor
 */
const UpdateDetailsMember = ({ member, dataOnChange, handleTextareaChange, onChangeInput }) => {
    return (
        <div className={'update-member__details'}>
            <div className={'update-member__details__informations'}>
                <Typography variant="h6" gutterBottom>
                    Informations personnels
                </Typography>
                <div className={'update-member__details__informations__content'}>
                    <input onChange={onChangeInput} name={'name'} type={'text'} value={member.name} />
                    <input onChange={onChangeInput} name={'email'} type={'text'} value={member.email} />
                    <input onChange={onChangeInput} name={'userName'} type={'text'} value={member.userName} />
                </div>
            </div>
            <Divider orientation="vertical" flexItem sx={{ marginLeft: '30px', height: '120px', marginTop: '70px' }} />
            <div className={'update-member__details__role'}>
                <Typography variant="h6" gutterBottom>
                    {' '}
                </Typography>
                <div className={'update-member__details__role__content'}>
                    <input onChange={onChangeInput} name={'pole'} type={'text'} value={member.pole} />
                    <input onChange={onChangeInput} name={'role'} type={'text'} value={member.role} />
                </div>
            </div>
            <div className={'update-member__details__description'}>
                <Typography variant="h6" gutterBottom>
                    Description
                </Typography>
                <div className={'update-member__details__description__content'}>
                    <div className={'update-member__details__description__content__text'}>
                        <TextArea
                            name={member.name}
                            className={''}
                            value={member.description}
                            onChange={handleTextareaChange}
                            required={false}
                            isDisabled={false}
                            dataOnChange={dataOnChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

UpdateDetailsMember.prototype = {
    member: PropTypes.object,
    handleTextareaChange: PropTypes.func,
    dataOnChange: PropTypes.object
}
export default UpdateDetailsMember
