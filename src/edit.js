import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    RichText,
    BlockControls,
    InspectorControls,
    AlignmentToolbar,
} from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import classnames from 'classnames';
import { useState } from '@wordpress/element';

import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const { text, alignment } = attributes;
    const [shadow, setShadow] = useState(false);

    const onChangeAlignment = (newAlignment) => {
        setAttributes({ alignment: newAlignment });
    };

    const onChangeText = (newText) => {
        setAttributes({ text: newText });
    };

    const toggleShadow = () => {
        const newShadow = !shadow;
        setAttributes({ shadow: newShadow });
        setShadow(newShadow);
    };

    const className = classnames(`text-box-align-${alignment}`, {
        'has-shadow': shadow,
    });

    return (
        <>
            <InspectorControls>
                <PanelBody>
                    <ToggleControl
                        label={__('Shadow', 'text-box')}
                        checked={shadow}
                        onChange={toggleShadow}
                    />
                </PanelBody>
            </InspectorControls>
            <BlockControls>
                <AlignmentToolbar
                    value={alignment}
                    onChange={onChangeAlignment}
                />
                <ToggleControl
                    icon="admin-page"
                    label={__('Shadow', 'text-box')}
                    checked={shadow}
                    onChange={toggleShadow}
                />
            </BlockControls>
            <RichText
                {...useBlockProps({
                    className: className,
                })}
                onChange={onChangeText}
                value={text}
                placeholder={__('Your Text', 'text-box')}
                tagName="h4"
                allowedFormats={[]}
            />
        </>
    );
}
