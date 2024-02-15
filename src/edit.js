import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, BlockControls } from '@wordpress/block-editor';
import './editor.scss';
import {ToolbarGroup , ToolbarButton, DropdownMenu ,
ToolbarDropdownMenu
} from "@wordpress/components";
export default function Edit({ attributes, setAttributes }) {
    return (
        <>
        <BlockControls group="inline">
            <p>
               Inline Controls 
            </p> 
        </BlockControls>
        <BlockControls group="block">
            <p>
               Block Controls 
            </p> 
        </BlockControls>
            <BlockControls
         
            controls={[
                {
                    title: "Button 1",
                    icon: "admin-generic",
                    isActive: true, // Set to true if this control should be active
                    onClick: () => console.log('Button 1 Clicked'),
                },
                {
                    title: "Button 2",
                    icon: "admin-collapse",
                    isActive: false, // Set to true if this control should be active
                    onClick: () => console.log('Button 2 Clicked'),
                },
                {
                    title: "Button 3",
                    icon: "admin-generic",
                    isActive: false, // Set to true if this control should be active
                    onClick: () => console.log('Button 3 Clicked'),
                }
            ]}>
              <ToolbarGroup>
                <ToolbarButton title="Align Left" icon="editor-alignleft"
                onClick={()=>console.log('Align Left')}
                />
               
                <ToolbarButton title="Align Cmter" icon="editor-aligncenter"
                onClick={()=>console.log('Align center')}
                />
                 
                <ToolbarButton title="Align Rogjt" icon="editor-alignright"
                onClick={()=>console.log('Align Right')}
                />
                    <ToolbarDropdownMenu
                        icon="arrow-down-alt2"
                        label={__('More Alignments', 'text-box')}
                        controls={[
                            {
                                title: __('Wide', 'text-box'),
                                icon: 'align-wide',
                            },
                            {
                                title: __('Full', 'text-box'),
                                icon: 'align-full',
                            },
                        ]}
                    />

              </ToolbarGroup>  
              <ToolbarGroup> 
               <p>
               anthoer block
                </p> 
              </ToolbarGroup>  
            </BlockControls>
            <RichText 
                onChange={(value) => setAttributes({ text: value })}
                value={attributes.text}
                {...useBlockProps()} 
                placeholder={__("Your Text ", "text-box")} 
                tagName='h1' 
            />
        </>
    );
}
