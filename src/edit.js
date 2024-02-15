import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';
export default function Edit({ attributes, setAttributes }) {
    return (
        <RichText 
            onChange={(value) => setAttributes({text: value})}
            value={attributes.text}
            {...useBlockProps()} 
            placeholder={__("Your Text ", "text-box")} 
            tagName='h1' 
        />
    );
}
